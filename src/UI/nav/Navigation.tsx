import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../components/LoginForm";
import MainMenu from "../components/MainMenu";
import MenuProfesores from "../components/MenuProfesores";
import MenuMaterias from "../components/MenuMaterias";
import MenuCursos from "../components/MenuCursos";
import MenuUsuarios from "../components/MenuUsuarios";
import MenuInasistencias from "../components/MenuInasistencias";
import FormProfesores from "../components/FormProfesores";
import FormUser from "../components/FormUser";
import FormMateria from "../components/FormMateria";
import FormCurso from "../components/FormCurso";
import AltaRealizado from "../components/AltaRealizado";
import ModRealizado from "../components/ModRealizado";
import InstConfirmacion from "../components/InstConfirmacion";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio"
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Inicio" component={LoginForm} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="MenuProfesores" component={MenuProfesores} />
        <Stack.Screen name="MenuMaterias" component={MenuMaterias} />
        <Stack.Screen name="MenuCursos" component={MenuCursos} />
        <Stack.Screen name="MenuUsuarios" component={MenuUsuarios} />
        <Stack.Screen name="MenuInasistencias" component={MenuInasistencias} />
        <Stack.Screen name="FormProfesores" component={FormProfesores} />
        <Stack.Screen name="FormUser" component={FormUser} />
        <Stack.Screen name="FormMateria" component={FormMateria} />
        <Stack.Screen name="FormCurso" component={FormCurso} />
        <Stack.Screen name="AltaRealizado" component={AltaRealizado} />
        <Stack.Screen name="ModRealizado" component={ModRealizado} />
        <Stack.Screen name="InstConfirmacion" component={InstConfirmacion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
