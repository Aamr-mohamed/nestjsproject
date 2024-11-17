import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true, // Enables the GraphQL Playground UI
    }),
  ],
  providers: [UserResolver, UserService],
})
export class GraphqlModule {}
