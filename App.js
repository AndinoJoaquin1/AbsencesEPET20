import React from 'react';
import LoginForm from './src/UI/components/LoginForm';
import MainMenu from './src/UI/components/MainMenu'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Ejecucion de componentes y navegacion  entre  pantallas


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={LoginForm}/>
        <Stack.Screen name="MainMenu" component={MainMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
