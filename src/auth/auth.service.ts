import { EntityManager } from '@mikro-orm/core';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LogInUserDto } from 'src/user/dto/login.dto';
import { UserCreatedDto } from 'src/user/dto/user-created.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { DataConflictException } from 'src/exceptions/DataConflictException';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly entityManager: EntityManager,
    private readonly userService: UserService,
  ) {}

  public async register(registrationData: CreateUserDto) {
    try {
      const userExist = await this.userService.findUser(
        registrationData.userName,
      );
      if (userExist) {
        throw new DataConflictException('This user already exists');
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(registrationData.password, salt);

      const createdUser = await this.userService.create({
        ...registrationData,
        password: hashedPassword,
      });
    } catch (err) {
      throw new DataConflictException(err.message);
    }
  }

  async login(request: LogInUserDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findUser(request.userName);
    if (user) {
      if (user && (await bcrypt.compare(request.password, user.password))) {
        const payload: JwtPayload = {
          userName: user.userName,
          sub: user.id,
        };
        console.log(payload);
        const accessToken = this.jwtService.sign(payload);
        user.lastLoggedIn = new Date();
        await this.entityManager.persistAndFlush(user);
        return { accessToken };
      }
    }
    throw new UnauthorizedException('Invalid username or password.');
  }

  async validateUser(request: LogInUserDto): Promise<User> {
    const user = await this.userService.findUser(request.userName);

    if (user && (await bcrypt.compare(request.password, user.password))) {
      return user;
    }

    return null;
  }
  async getUserIdFromToken(token: string): Promise<string> {
    const decodedToken = this.jwtService.decode(token);
    return decodedToken.sub;
  }
}
