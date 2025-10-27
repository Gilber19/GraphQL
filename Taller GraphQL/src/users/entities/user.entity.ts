import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Todo } from '../../todos/entities/todo.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => [Todo], { nullable: true })
  todos?: Todo[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
