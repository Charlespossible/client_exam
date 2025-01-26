export interface LoginFormData {
    emailOrPhone: string;
    password: string;
  }
  
  export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
  }
  