import { StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: '#CCE2F2',
      borderWidth: 1,
      borderRadius: 10,
      padding:10,
    },
    container: {

    }, 
    labelStyle: {
      color: '#6B7CBA',
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 5,
    }
  })
  
export default inputStyles;