export interface LoginFormFieldsProps {
    userCode: string,
    password: string
}
export interface LoginFormInputs {
    onSubmitValue: (value: LoginFormFieldsProps) => void
}