import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      introspection: true,
      formatError: (error) => {
        return {
          message: error.message,
          locations: error.locations,
          path: error.path,
          extensions: {
            code: error.extensions?.code,
            stacktrace: error.extensions?.stacktrace,
          },
        };
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    UsersModule,
    TodosModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
