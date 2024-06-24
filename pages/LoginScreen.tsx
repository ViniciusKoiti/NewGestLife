import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputFieldProps from '../components/inputDefault/InputProps';
import DynamicForm from '../components/dynamicForm';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
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
    <View style={styles.containerRadius}>
      <View style={styles.container}>
        <View style={styles.containerForm}>

      
        <DynamicForm fields={fields} onSubmit={handleSubmit} submitButton={''} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#FAFCFE',
    borderColor: '#C6E0F2',
    borderRadius: 20
  },
  containerRadius: {
    flex: 1,
    padding: 10
  },
  containerForm:{
    borderWidth: 1,
    flex: 0.50,
    borderColor: '#E1EEF8',
    borderRadius: 20,
    padding: 20
  }
});

export default LoginScreen;
