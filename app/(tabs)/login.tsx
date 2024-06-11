import ValidatedInputField from '@/components/inputDefault';
import InputDefault from '@/components/inputDefault';
import InputFieldProps from '@/components/inputDefault/InputProps';
import React from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';





export default function LoginScreen() {

  const fields: InputFieldProps[] = [
    {
      label: 'email',
      placeholder: 'Digite seu email',
      secureTextEntry: false,
      errors: {error: "teste"},
      keyboardType: 'email-address'
    },
  ]
  

  const field = fields[0];


  return (
    <View>
      <Text> Vinicius</Text>
      <ValidatedInputField 
      placeholder={field.placeholder}
        secureTextEntry={field.secureTextEntry}
        label={field.label}
        errors={field.errors}></ValidatedInputField>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backgroundColor: {
    flex:1,
    backgroundColor: 'blue'
  },
});
