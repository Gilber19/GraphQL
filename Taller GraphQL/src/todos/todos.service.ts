import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoInput: CreateTodoInput) {
    return this.prisma.todo.create({
      data: createTodoInput,
      include: {
        user: true,
      },
    });
  }

  async findAll() {
    return this.prisma.todo.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async findByUser(userId: number) {
    return this.prisma.todo.findMany({
      where: { userId },
      include: {
        user: true,
      },
    });
  }

  async update(updateTodoInput: UpdateTodoInput) {
    const { id, ...data } = updateTodoInput;
    return this.prisma.todo.update({
      where: { id },
      data,
      include: {
        user: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.todo.delete({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async toggleCompleted(id: number) {
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    return this.prisma.todo.update({
      where: { id },
      data: { completed: !todo.completed },
      include: {
        user: true,
      },
    });
  }
}
