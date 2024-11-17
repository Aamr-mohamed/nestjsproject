import { gql } from "@apollo/client";

export const USER_QUERY = gql`
  query User($userId: Float!) {
    user(id: $userId) {
      title
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstNameArab
        fatherNameArab
        grandfatherNameArab
        familyNameArab
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
      dateOfBirth
      gender
      nationality
      additionalNationality
      passportNo
      passportIssueDate
      passportExpiryDate
    }
  }
`;

export const USER_UPDATE_QUERY = gql`
  mutation UpdateUser($id: String!, $updatedUserData: UpdateUserInput!) {
    updateUser(id: $id, updatedUserData: $updatedUserData) {
      nationalId {
        idNumber
        expiryDate
      }
      title
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstNameArab
        fatherNameArab
        grandfatherNameArab
        familyNameArab
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      dateOfBirth
      gender
      nationality
      additionalNationality
      passportNo
      passportIssueDate
      passportExpiryDate
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;
