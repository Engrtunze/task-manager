import {
  Entity,
  EntityRepositoryType,
  HiddenProps,
  Property,
} from '@mikro-orm/core';

import { UserRepository } from '../user/user.repository';
import { BaseEntity } from '../abstract-base-entity/base.entity';
import { Exclude } from 'class-transformer';

@Entity({ repository: () => UserRepository })
export class User extends BaseEntity {
  [EntityRepositoryType]?: UserRepository;
  @Property()
  firstName: string;
  @Property()
  lastName: string;
  @Property({ unique: true })
  userName: string;
  @Property()
  lastLoggedIn?: Date;
  @Property()
  password: string;
}
