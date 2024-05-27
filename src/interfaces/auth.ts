export interface IUserData {
    userType: string | null;  
    signUpEmail: string;
    signUpPassword: string;
    signUpConfirmPassword: string;
    name: string;
    lastName: string;
    cellNumber: string;
    organization: string;
    adressNumber: string;
    street: string;
    district: string;
    complement: string;
    description: string;
    [key: string]: string | null;
  }