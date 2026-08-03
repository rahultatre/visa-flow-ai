export interface FormSchema {
  title: string;
  description?: string;
  fields: FormField[];
};

export interface FormField {
    id: string;
  name: string;
  type: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio' | 'select';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
};