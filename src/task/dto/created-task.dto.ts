import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from './task.enum';
import { User } from 'src/user/user.entity';
import { UserCreatedDto } from 'src/user/dto/user-created.dto';

export class TaskCreatedDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description?: string;
  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
  @ApiProperty()
  deleted: boolean;
  @ApiProperty()
  user: UserCreatedDto;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
