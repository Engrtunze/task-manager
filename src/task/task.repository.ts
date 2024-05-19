import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Task } from './task.entity';

export class TaskRepository extends EntityRepository<Task> {
  constructor(private readonly entityManager: EntityManager) {
    super(entityManager, Task);
  }
  async createTask(taskData: Task) {
    await this.entityManager.persistAndFlush(taskData);
  }

  async findActiveTasksByUser(userId: string): Promise<Task[]> {
    return this.find({ deleted: false, user: userId });
  }

  async findOneActiveTaskByUserId(
    taskId: string,
    userId: string,
  ): Promise<Task | null> {
    return this.findOne({ id: taskId, deleted: false, user: userId });
  }
}
