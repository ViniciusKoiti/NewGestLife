import { StyleSheet } from 'react-native';

const registerStyleScreen = StyleSheet.create({
    registerButton: {
        marginTop: 5,
        color: '#6B7CBA',
        backgroundColor: '#E0F4FD',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
        padding: 10,
    },
    textRegister: {
        color: '#6B7CBA',
    },
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
        flex: 1,
        borderColor: '#E1EEF8',
        borderRadius: 20,
        padding: 10
      }
})
 
export default registerStyleScreen;