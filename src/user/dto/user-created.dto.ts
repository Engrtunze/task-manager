import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserCreatedDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  lastLoggedIn: Date;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @Exclude() // Exclude the 'password' property from transformation
  password: string;
}
