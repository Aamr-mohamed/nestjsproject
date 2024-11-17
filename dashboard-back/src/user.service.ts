import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UpdateUserInput } from './updatedUser.entity';

@Injectable()
export class UserService {
  private user: User | null = null;
  async getUserById(id: number): Promise<User> {
    // Return mock static data for the user
    this.user = {
      nationalId: {
        idNumber: '123123123123',
        expiryDate: '2022-01-01',
      },
      title: 'Mr.',
      firstName: 'John',
      fatherName: 'Doe',
      grandfatherName: 'Smith',
      familyName: 'Johnson',
      localizedName: {
        firstNameArab: 'جون',
        fatherNameArab: 'دو',
        grandfatherNameArab: 'سميث',
        familyNameArab: 'سميث',
      },
      nationalities: [
        {
          country: {
            id: '1',
            name: 'USA',
          },
          countryId: '1',
        },
      ],
      dateOfBirth: '1990-01-01',
      gender: 'Male',
      nationality: 'USA',
      additionalNationality: 'Canada',
      passportNo: 'A1234567',
      passportIssueDate: '2015-06-01',
      passportExpiryDate: '2025-06-01',
      maritalStatus: {
        id: '1',
        name: 'Single',
      },
      dependants: '2',
    };
    return this.user;
  }
  async updateUser(
    id: string,
    updatedUserData: UpdateUserInput,
  ): Promise<User> {
    this.user = { ...this.user, ...updatedUserData };
    return this.user;
  }
}
