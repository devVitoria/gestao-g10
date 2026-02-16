import {
  FormApi,
  FormAsyncValidateOrFn,
  FormValidateOrFn,
} from "@tanstack/react-form";

export interface FormProps {
  defaultValues: Record<string, string>;
  onSubmit: (value: any) => void;
  titleIcon: React.ReactNode;
  title: string;
  onCloseForm: () => void;
  formInputFields: Record<
    string,
    {
      icon: React.ReactNode;
      title: string;
      subtitle?: string;
      placeholder: string;
      type: string;
      accept?: string;
      min?: string, 
      max?: string,
      maxlength?: number
    }
  >;
}
