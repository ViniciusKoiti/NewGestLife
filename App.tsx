import 'react-native-gesture-handler'; // Necessário para o react-native-gesture-handler
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import RootStackParamList from './navigation/NavegationProps';
import { AuthProviderWrapper } from './components/contexts/authContext/AuthContext';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <AuthProviderWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProviderWrapper>
  );
};

export default App;
