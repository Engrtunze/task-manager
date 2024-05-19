import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { TaskMapper } from 'src/mappers/task.mapper';
import { EventsGateway } from 'src/events/events.gateway';

@Module({
  imports: [MikroOrmModule.forFeature([Task]), JwtModule, UserModule],
  providers: [TaskService, EventsGateway, TaskMapper],
  controllers: [TaskController],
})
export class TaskModule {}
