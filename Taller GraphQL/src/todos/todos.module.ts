import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from '../users/users.service';

@Module({
  providers: [TodosResolver, TodosService, PrismaService, UsersService],
  exports: [TodosService],
})
export class TodosModule {}
