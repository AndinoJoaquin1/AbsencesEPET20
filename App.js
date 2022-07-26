import React from 'react';
import LoginForm from './src/UI/components/LoginForm';
import MainMenu from './src/UI/components/MainMenu';
import MenuProfesores from './src/UI/components/MenuProfesores';
//import MenuMaterias from './src/UI/components/MenuMaterias';
//import MenuCursos from './src/UI/components/MenuCursos';
//import FormProfesores from './src/UI/components/FormProfesores';
//import FormUser from './src/UI/components/FormUser';
//import AltaRealizado from './src/UI/components/AltaRealizado';
//import ModRealizado from './src/UI/components/ModRealizado';
//import InstConfirmacion from './src/UI/components/InstConfirmacion';
//import InsRealizado from './src/UI/components/InstRealizado';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Ejecucion de componentes y navegacion  entre  pantallas


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={LoginForm}/>
        <Stack.Screen name="MainMenu" component={MainMenu}/>
        <Stack.Screen name="MenuProfesores" component={MenuProfesores}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
