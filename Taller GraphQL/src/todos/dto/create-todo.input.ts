import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  completed?: boolean;
}
