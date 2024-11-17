import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UpdateUserInput } from './updatedUser.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('updatedUserData') updatedUserData: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(id, updatedUserData);
  }
}
