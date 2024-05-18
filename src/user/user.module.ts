import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserMapper } from 'src/mappers/user.mapper';
import { UserRepository } from './user.repository';

@Module({
  imports: [MikroOrmModule.forFeature([User]), JwtModule],
  controllers: [UserController],
  providers: [UserService, UserMapper],
  exports: [UserService],
})
export class UserModule {}
