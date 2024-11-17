import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LocalizedName {
  @Field()
  firstNameArab?: string;

  @Field()
  fatherNameArab?: string;

  @Field()
  grandfatherNameArab?: string;

  @Field()
  familyNameArab?: string;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber?: string;

  @Field()
  expiryDate?: string;
}

@ObjectType()
export class Country {
  @Field()
  id?: string;

  @Field()
  name?: string;
}

@ObjectType()
export class Nationality {
  @Field(() => Country)
  country?: Country;

  @Field()
  countryId?: string;
}

@ObjectType()
export class MaritalStatus {
  @Field()
  id?: string;

  @Field()
  name?: string;
}

@ObjectType()
export class User {
  @Field()
  title: string;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field()
  dependants: string;

  @Field()
  dateOfBirth: string;

  @Field()
  gender: string;

  @Field()
  nationality: string;

  @Field()
  additionalNationality: string;

  @Field()
  passportNo: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;
}
