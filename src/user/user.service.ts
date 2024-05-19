import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(request: CreateUserDto) {
    const user = this.userRepository.create(request);
    return this.userRepository.createUser(user);
  }

  async findUser(username: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ userName: username });
      return user;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
  async findUserById(userId: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne(userId);
      return user;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
