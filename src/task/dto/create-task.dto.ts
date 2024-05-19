import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from './task.enum';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  title: string;
  @IsOptional()
  @ApiProperty()
  description: string;
  @IsOptional()
  @IsString()
  @ApiHideProperty()
  status: TaskStatus;
}
