import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { TaskCreatedDto } from 'src/task/dto/created-task.dto';
import { Task } from 'src/task/task.entity';
import { UserCreatedDto } from 'src/user/dto/user-created.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class TaskMapper {
  mapToTaskCreatedDto(task: Task): TaskCreatedDto {
    const {
      id,
      title,
      description,
      status,
      deleted,
      createdAt,
      updatedAt,
      user,
    } = task;

    const userDto: UserCreatedDto = plainToClass(UserCreatedDto, user);

    const taskCreatedDto: TaskCreatedDto = {
      id,
      title,
      description,
      status,
      deleted,
      user: userDto,
      createdAt,
      updatedAt,
    };

    return taskCreatedDto;
  }

  mapToTaskCreatedDtoList(tasks: Task[]): TaskCreatedDto[] {
    return tasks.map((task) => this.mapToTaskCreatedDto(task));
  }
}
