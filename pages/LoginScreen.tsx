import React from 'react';
import { View, StyleSheet, Pressable, Text  } from 'react-native';
import InputFieldProps from '../components/inputDefault/InputProps';
import DynamicForm from '../components/dynamicForm';
import loginStyleScreen from './stylePage/LoginStyleScreen';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const {
    registerButton, 
    textRegister, 
    containerRadius,
    container,
    containerForm
  } = loginStyleScreen;

  
  const fields: InputFieldProps[] = [
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'input',
      secureTextEntry: false,
      keyboardType: 'email-address',
      onChanged: (label: string, value: string) => {
        console.log(`Changed ${label}: ${value}`);
      },
      onBlur: (label: string, event: any) => {
        console.log(`Blurred ${label}`);
      },
      onSubmitted: (value: string, label: string) => {
        if (!value.includes('@')) {
          return 'Invalid email address';
        }
        return '';
      },
      inputValue: '',
      errors: {}
    },
    {
      label: 'Password',
      placeholder: 'Password',
      type: 'input',
      secureTextEntry: true,
      keyboardType: 'default',
      onChanged: (label: string, value: string) => {
        console.log(`Changed ${label}: ${value}`);
      },
      onBlur: (label: string, event: any) => {
        console.log(`Blurred ${label}`);
      },
      onSubmitted: (value: string, label: string) => {
        if (value.length < 6) {
          return 'Password must be at least 6 characters';
        }
        return '';
      },
      inputValue: '',
      errors: {}
    }
  ];

  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log('Form submitted:', formData);
  };

  return (
    <View style={containerRadius}>
      <View style={container}>
        <View style={containerForm}>
          <DynamicForm fields={fields} onSubmit={handleSubmit} submitButton={'Login'} />
          <Pressable style={registerButton} onPress={() => navigation.navigate('Register')}>
            <Text style={textRegister}>Registre-se</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
