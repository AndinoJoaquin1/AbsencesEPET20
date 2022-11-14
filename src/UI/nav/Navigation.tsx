import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../screens/LoginForm";
import MainMenu from "../screens/MainMenu";
import MenuProfesores from "../screens/MenuProfesores";
import MenuMaterias from "../screens/MenuMaterias";
import MenuCursos from "../screens/MenuCursos";
import MenuUsuarios from "../screens/MenuUsuarios";
import MenuInasistencias from "../screens/MenuInasistencias";
import FormProfesores from "../screens/FormProfesores";
import FormUser from "../screens/FormUser";
import FormMateria from "../screens/FormMateria";
import FormCurso from "../screens/FormCurso";
import AltaRealizado from "../screens/AltaRealizado";
import ModRealizado from "../screens/ModRealizado";
import InstConfirmacion from "../screens/InstConfirmacion";
import ModProfesor from "../screens/ModProfesor";
import Registro from "../screens/Registro";
import { useAuth } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

export type RootStackParams = {
  Inicio;
  MainMenu;
  MenuProfesores;
  MenuMaterias;
  MenuCursos;
  MenuUsuarios;
  MenuInasistencias;
  FormProfesores;
  FormUser;
  FormMateria;
  FormCurso;
  AltaRealizado;
  ModRealizado;
  InstConfirmacion;
  ModProfesor: {
    id: string;
    lastName: string;
    firstName: string;
  };
  Registro;
  SplashScreen;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  const { user, loading } = useAuth();
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#005db4" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontFamily: "sans-serif-light" },
        }}
      >
        {loading?(
          <Stack.Screen name="SplashScreen" component={SplashScreen}/>
          ):null }
        
        {user == null ? (
          <>
            <Stack.Screen
              name="Inicio"
              options={{ headerShown: false }}
              component={LoginForm}
            />
            <Stack.Screen name="Registro" component={Registro} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="MainMenu"
              component={MainMenu}
              options={{
                headerBackVisible: false,
                title: "Absences EPET20",
              }}
              />
            <Stack.Screen name="MenuProfesores" component={MenuProfesores} />
            <Stack.Screen name="MenuMaterias" component={MenuMaterias} />
            <Stack.Screen name="MenuCursos" component={MenuCursos} />
            <Stack.Screen name="MenuUsuarios" component={MenuUsuarios} />
            <Stack.Screen
              name="MenuInasistencias"
              component={MenuInasistencias}
              />
            <Stack.Screen name="FormProfesores" component={FormProfesores} />
            <Stack.Screen name="FormUser" component={FormUser} />
            <Stack.Screen name="FormMateria" component={FormMateria} />
            <Stack.Screen name="FormCurso" component={FormCurso} />
            <Stack.Screen name="AltaRealizado" component={AltaRealizado} />
            <Stack.Screen name="ModRealizado" component={ModRealizado} />
            <Stack.Screen
              name="InstConfirmacion"
              component={InstConfirmacion}
              />
            <Stack.Screen name="ModProfesor" component={ModProfesor} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
