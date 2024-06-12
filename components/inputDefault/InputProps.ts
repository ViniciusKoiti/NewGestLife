import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";

interface InputFieldProps {
    placeholder: string,
    secureTextEntry: boolean,
    inputValue: string, 
    label: string,
    keyboardType?: KeyboardTypeOptions;
    onChanged?: (label: string, valueInput: string) => any,
    onBlur?: (label: string, valueInput: NativeSyntheticEvent<TextInputEndEditingEventData>) => any,
    onSubmitted?: (label: string, value: string) => any,
    errors: { [name: string]: string };
}

export default InputFieldProps;