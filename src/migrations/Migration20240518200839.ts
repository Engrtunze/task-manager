import { Migration } from '@mikro-orm/migrations';

export class Migration20240518200839 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" uuid not null default uuid_generate_v4(), "created_at" timestamptz not null default now(), "updated_at" timestamptz not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "user_name" varchar(255) not null, "last_logged_in" timestamptz null, "password" varchar(255) not null, constraint "user_pkey" primary key ("id"));',
    );
    this.addSql(
      'alter table "user" add constraint "user_user_name_unique" unique ("user_name");',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
