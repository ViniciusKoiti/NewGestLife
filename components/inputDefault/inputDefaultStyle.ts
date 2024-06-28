import { StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: '#CCE2F2',
      borderWidth: 1,
      color: "#1a1a1a",
      borderRadius: 10,
      backgroundColor: '#F7FAFD',
      padding:10,
    },
    container: {
      padding: 10
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