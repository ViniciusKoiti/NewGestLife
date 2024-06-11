import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import inputStyles from './inputDefaultStyle';
import InputFieldProps from './InputProps';

const { input, container, labelStyle, errorInput, errorText } = inputStyles;

const ValidatedInputField: React.FC<InputFieldProps> = ({ 
  placeholder, 
  secureTextEntry,
  label,
  keyboardType = 'default',
  onChanged,
  onBlur, 
  errors
}: InputFieldProps) => (
  <View style={container}>
    <Text style={labelStyle}>{placeholder}</Text>
    <TextInput
      style={[input, errors[label] ? errorInput : null]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => onChanged && onChanged(label, text)}
      onEndEditing={(valueInput) => onBlur && onBlur(label, valueInput)}
      keyboardType={keyboardType}
    />
    {errors[label] ? <Text style={errorText}>{errors[label]}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
 
});

export default ValidatedInputField;
