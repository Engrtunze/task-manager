import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { JwtService } from '@nestjs/jwt';
import { DecodeToken } from 'src/util/jwt-decode-token';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserService } from 'src/user/user.service';
import { TaskStatus } from './dto/task.enum';
import { TaskCreatedDto } from './dto/created-task.dto';
import { TaskMapper } from 'src/mappers/task.mapper';
import { EventsGateway } from 'src/events/events.gateway';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly tasksGateway: EventsGateway,
    private jwtService: JwtService,
    private userService: UserService,
    private readonly taskMapper: TaskMapper,
  ) {}

  async createNewTask(
    userId: string,
    task: CreateTaskDto,
  ): Promise<TaskCreatedDto> {
    const req = await DecodeToken.getUserIdFromToken(this.jwtService, userId);
    const userData = await this.userService.findUserById(req);
    const newTask = await this.taskRepository.create({
      ...task,
      status: TaskStatus.PENDING,
      user: userData,
    });
    await this.taskRepository.createTask(newTask);
    const newTaskMapper = this.taskMapper.mapToTaskCreatedDto(newTask);
    this.tasksGateway.handleTaskCreated(`${userData.firstName}${userData.lastName} created a new task with the title [${newTaskMapper.title}]
     and description as [${newTaskMapper.description}] 
     with current status of task as [${newTaskMapper.status}]`);
    return newTaskMapper
  }

  async updateTask(
    userId: string,
    taskDto: UpdateTaskDto,
  ): Promise<TaskCreatedDto> {
    const req = await DecodeToken.getUserIdFromToken(this.jwtService, userId);
    const task = await this.validateUser(req, taskDto.id);
    if (taskDto.title) task.title = taskDto.title;
    if (taskDto.description) task.description = taskDto.description;
    if (taskDto.status) task.status = taskDto.status;
    await this.taskRepository.createTask(task);
   this.tasksGateway.handleTaskUpdated(`${task.user.firstName}${task.user.lastName} updated a task with the title [${task.title}]
   and description as [${task.description}] 
   with current status of task as [${task.status}]`);
    return this.taskMapper.mapToTaskCreatedDto(task);
  }

  async deleteTask(userId: string, taskId: string): Promise<void> {
    const req = await DecodeToken.getUserIdFromToken(this.jwtService, userId);
    const taskData = await this.validateUser(req, taskId);
    await this.taskRepository.nativeUpdate({ id: taskId }, { deleted: true });
   this.tasksGateway.handleTaskDeleted(`${taskData.user.firstName}${taskData.user.lastName} Deleted a task with the title [${taskData.title}]
   and description as [${taskData.description}] 
   with current status of task as [${taskData.status}]`);
  }

  async findByTaskId(userId: string, id: string): Promise<TaskCreatedDto> {
    const req = await DecodeToken.getUserIdFromToken(this.jwtService, userId);
    const task = await this.validateUser(req, id);
    this.tasksGateway.handleTaskRetrieved(`${task.user.firstName}${task.user.lastName} viewed a task with the title [${task.title}]
   and description as [${task.description}] 
   with current status of task as [${task.status}]`);
   return this.taskMapper.mapToTaskCreatedDto(task);
  }

  async validateUser(userId: string, id: string): Promise<Task> {
    const userData = await this.userService.findUserById(userId);
    const task = await this.taskRepository.findOneActiveTaskByUserId(
      id,
      userData.id,
    );
    if (!task || task.user.id !== userData.id) {
      throw new UnauthorizedException('you dont have access to this task');
    }
    return task;
  }

  async findAllTask(userId: string): Promise<TaskCreatedDto[]> {
    const req = await DecodeToken.getUserIdFromToken(this.jwtService, userId);
    const userData = await this.userService.findUserById(req);
    const taskDta = await this.taskRepository.findActiveTasksByUser(
      userData.id,
    );
    this.tasksGateway.handleTaskRetrieved(`${userData.firstName}${userData.lastName} has viewed all personal task`);
    return this.taskMapper.mapToTaskCreatedDtoList(taskDta);
  }
}
