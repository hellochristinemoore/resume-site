//interface is a mechanism to enforce contracts also knows as modules
//this contract/interface aligns with the JSON data object retrieved from the API request

export interface PersonalInfo {
  surname: string;
  name: string;
  dateOfBirth: number;
  email: string;
  phoneNumber: number;
}
