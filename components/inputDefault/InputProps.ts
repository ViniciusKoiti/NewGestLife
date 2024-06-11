import { NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";

interface InputFieldProps {
    placeholder: string,
    secureTextEntry: boolean,
    label: string, 
    onChanged?: (label: string, valueInput: string) => any,
    onBlur?: (label: string, valueInput: NativeSyntheticEvent<TextInputEndEditingEventData>) => any,
    errors: { [name: string]: string };
}

export default InputFieldProps;