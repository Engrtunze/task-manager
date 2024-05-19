import {
  Entity,
  EntityRepositoryType,
  Enum,
  ManyToOne,
  Property,
} from '@mikro-orm/core';

import { BaseEntity } from '../abstract-base-entity/base.entity';
import { TaskRepository } from './task.repository';
import { User } from '../user/user.entity';
import { TaskStatus } from './dto/task.enum';

@Entity({ repository: () => TaskRepository })
export class Task extends BaseEntity {
  [EntityRepositoryType]?: TaskRepository;
  @Property()
  title: string;
  @Property()
  description?: string;
  @Enum(() => TaskStatus)
  status: TaskStatus;
  @Property({ default: false })
  deleted: boolean;
  @ManyToOne(() => User)
  user: User;
}
