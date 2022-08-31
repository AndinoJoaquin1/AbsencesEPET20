import React from 'react';
import LoginForm from './src/UI/components/LoginForm';
import MainMenu from './src/UI/components/MainMenu';
import MenuProfesores from './src/UI/components/MenuProfesores';
import MenuMaterias from './src/UI/components/MenuMaterias';
import MenuCursos from './src/UI/components/MenuCursos';
import FormProfesores from './src/UI/components/FormProfesores';
import FormUser from './src/UI/components/FormUser';
import AltaRealizado from './src/UI/components/AltaRealizado';
import ModRealizado from './src/UI/components/ModRealizado';
import InstConfirmacion from './src/UI/components/InstConfirmacion';
import InsRealizado from './src/UI/components/InstRealizado';
import MenuUsuarios from './src/UI/components/MenuUsuarios';
import MenuInasistencias from './src/UI/components/MenuInasistencias';
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
        <Stack.Screen name="MenuMaterias" component={MenuMaterias}/>
        <Stack.Screen name="MenuCursos" component={MenuCursos}/>
        <Stack.Screen name="MenuUsuarios" component={MenuUsuarios}/>
        <Stack.Screen name="MenuInasistencias" component={MenuInasistencias}/>
        <Stack.Screen name="FormProfesores" component={FormProfesores}/>
        <Stack.Screen name="FormUser" component={FormUser}/>
        <Stack.Screen name="FormMateria" component={FormMateria}/>
        <Stack.Screen name="AltaRealizado" component={AltaRealizado}/>
        <Stack.Screen name="ModRealizado" component={ModRealizado}/>
        <Stack.Screen name="InstConfirmacion" component={InstConfirmacion}/>
        <Stack.Screen name="InsRealizado" component={InsRealizado}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
