
import InputFieldProps from '@/components/inputDefault/InputProps';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import DynamicForm from '@/components/dynamicForm';
import { auth } from '@/infra/firebase';


export default function LoginScreen() {


  const fields: InputFieldProps[] = [
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'input',
      secureTextEntry: false,
      keyboardType: 'email-address',
      inputValue: '',
      errors: {},
      onSubmitted: (value, label) => {
        if (!value) {
          return 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          return 'Invalid email address';
        }
        return null;
      },
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'input',
      secureTextEntry: true,
      keyboardType: 'default',
      inputValue: '',
      errors: {},
    
      onSubmitted: (value, label) => {
        if (!value) {
          return 'Password is required';
        }
        return null;
      },
    },
  ];

  const handleSubmit = (data: { [key: string]: string }) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert('Login Successful', `Welcome ${user.email}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Failed', errorMessage);
      });

  };


  return (
    <View style={styles.titleContainer}>
      <DynamicForm fields={fields} onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    
    padding: 10,
    flex: 1,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  backgroundColor: {
    flex: 1,
    backgroundColor: 'blue'
  },
});
