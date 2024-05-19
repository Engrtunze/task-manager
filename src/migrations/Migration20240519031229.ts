import { Migration } from '@mikro-orm/migrations';

export class Migration20240519031229 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "task" ("id" uuid not null default uuid_generate_v4(), "created_at" timestamptz not null default now(), "updated_at" timestamptz not null, "title" varchar(255) not null, "description" varchar(255) null, "status" text check ("status" in (\'Pending\', \'Processing\', \'Completed\')) not null, "deleted" boolean not null default false, "user_id" uuid not null, constraint "task_pkey" primary key ("id"));',
    );

    this.addSql(
      'alter table "task" add constraint "task_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "task" cascade;');
  }
}
