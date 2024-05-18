import { Injectable } from '@nestjs/common';
import { UserCreatedDto } from '../user/dto/user-created.dto';
import { User } from '../user/user.entity';

@Injectable()
export class UserMapper {
  mapToUserCreatedDto(user: User): UserCreatedDto {
    const {
      id,
      firstName,
      lastName,
      userName,
      lastLoggedIn,
      createdAt,
      updatedAt,
    } = user;

    const userCreatedDto: UserCreatedDto = {
      id,
      firstName,
      lastName,
      userName,
      lastLoggedIn,
      createdAt,
      updatedAt,
    };

    return userCreatedDto;
  }
}
