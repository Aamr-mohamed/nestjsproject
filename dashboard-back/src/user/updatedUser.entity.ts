import { InputType, Field } from '@nestjs/graphql';

@InputType()
class UpdateLocalizedNameInput {
  @Field({ nullable: true })
  firstNameArab?: string;

  @Field({ nullable: true })
  fatherNameArab?: string;

  @Field({ nullable: true })
  grandfatherNameArab?: string;

  @Field({ nullable: true })
  familyNameArab?: string;
}

@InputType()
class UpdateNationalIdInput {
  @Field({ nullable: true })
  idNumber?: string;

  @Field({ nullable: true })
  expiryDate?: string;
}

@InputType()
class UpdateCountryInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType()
class UpdateNationalityInput {
  @Field(() => UpdateCountryInput, { nullable: true })
  country?: UpdateCountryInput;

  @Field({ nullable: true })
  countryId?: string;
}

@InputType()
class UpdateMaritalStatusInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field(() => UpdateLocalizedNameInput, { nullable: true })
  localizedName?: UpdateLocalizedNameInput;

  @Field(() => UpdateNationalIdInput, { nullable: true })
  nationalId?: UpdateNationalIdInput;

  @Field(() => [UpdateNationalityInput], { nullable: true })
  nationalities?: UpdateNationalityInput[];

  @Field(() => UpdateMaritalStatusInput, { nullable: true })
  maritalStatus?: UpdateMaritalStatusInput;

  @Field({ nullable: true })
  dependants?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  additionalNationality?: string;

  @Field({ nullable: true })
  passportNo?: string;

  @Field({ nullable: true })
  passportIssueDate?: string;

  @Field({ nullable: true })
  passportExpiryDate?: string;
}
