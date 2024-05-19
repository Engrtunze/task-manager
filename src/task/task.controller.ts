import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskCreatedDto } from './dto/created-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ status: HttpStatus.CREATED, type: TaskCreatedDto })
  @ApiOperation({ summary: 'Create task' })
  @UseGuards(JwtAuthGuard)
  async createTask(
    @Req() request: Request,
    @Body(ValidationPipe) createTask: CreateTaskDto,
  ): Promise<TaskCreatedDto> {
    const user = request.headers['authorization'];
    const userId = user.split(' ')[1];
    return this.tasksService.createNewTask(userId, createTask);
  }
  @Put()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ status: HttpStatus.CREATED, type: TaskCreatedDto })
  @ApiOperation({ summary: 'Update task' })
  @UseGuards(JwtAuthGuard)
  async updateTask(
    @Req() request: Request,
    @Body(ValidationPipe) updateTask: UpdateTaskDto,
  ): Promise<TaskCreatedDto> {
    const user = request.headers['authorization'];
    const userId = user.split(' ')[1];
    return this.tasksService.updateTask(userId, updateTask);
  }

  @Get('/taskId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ status: HttpStatus.CREATED, type: TaskCreatedDto })
  @ApiOperation({ summary: 'Get task by Id' })
  @UseGuards(JwtAuthGuard)
  async getTaskById(
    @Req() request: Request,
    @Query('taskId') taskId: string,
  ): Promise<TaskCreatedDto> {
    const user = request.headers['authorization'];
    const userId = user.split(' ')[1];
    return this.tasksService.findByTaskId(userId, taskId);
  }

  @Get()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    isArray: true,
    type: TaskCreatedDto,
  })
  @ApiOperation({ summary: 'Get all user task' })
  @UseGuards(JwtAuthGuard)
  async getAllUserTaskBy(@Req() request: Request): Promise<TaskCreatedDto[]> {
    const user = request.headers['authorization'];
    const userId = user.split(' ')[1];
    return this.tasksService.findAllTask(userId);
  }

  @Delete('/taskId')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ status: HttpStatus.OK })
  @ApiOperation({ summary: 'Delete task' })
  @UseGuards(JwtAuthGuard)
  async deleteTask(@Req() request: Request, @Query('taskId') taskId: string) {
    const user = request.headers['authorization'];
    const userId = user.split(' ')[1];
    this.tasksService.deleteTask(userId, taskId);
  }
}
