import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(
    private readonly todosService: TodosService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todosService.create(createTodoInput);
  }

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todosService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.findOne(id);
  }

  @Query(() => [Todo], { name: 'todosByUser' })
  findByUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.todosService.findByUser(userId);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todosService.update(updateTodoInput);
  }

  @Mutation(() => Todo)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.remove(id);
  }

  @Mutation(() => Todo)
  toggleTodoCompleted(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.toggleCompleted(id);
  }

  @ResolveField(() => User)
  user(@Parent() todo: Todo) {
    return this.usersService.findOne(todo.userId);
  }
}
