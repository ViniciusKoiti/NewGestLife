import InputFieldProps from "../inputDefault/InputProps";

interface DynamicFormProps{
    fields: InputFieldProps[],
    onSubmit: (data: { [key: string]: string }) => void;
}

export default DynamicFormProps;