export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    referer?: string; // Optional field
    password: string;
    confirmPassword: string;
  }
  
  export interface RegistrationFormProps {
    onSubmit: (data: RegistrationFormData) => void;
  }
  