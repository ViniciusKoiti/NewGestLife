import React from 'react';
import { View, Pressable, Text  } from 'react-native';
import InputFieldProps from '../components/inputDefault/InputProps';
import DynamicForm from '../components/dynamicForm';
import registerStyleScreen from './stylePage/RegisterStyleScreen';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const {
    registerButton, 
    textRegister, 
    containerRadius,
    container,
    containerForm
  } = registerStyleScreen;

  
  const fields: InputFieldProps[] = [
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'input',
      secureTextEntry: false,
      keyboardType: 'email-address',
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
      label: 'Senha',
      placeholder: 'Senha',
      type: 'input',
      secureTextEntry: true,
      keyboardType: 'default',
      onSubmitted: (value: string, label: string) => {
        if (value.length < 6) {
          return 'Password must be at least 6 characters';
        }
        return '';
      },
      inputValue: '',
      errors: {}
    },
    {
      label: 'Data de Nascimento',
      placeholder: 'Data de Nascimento',
      type: 'datecalendar',
      secureTextEntry: false,
      keyboardType: 'default',
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
          <DynamicForm fields={fields} onSubmit={handleSubmit} submitButton={'Register'} />
       
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
