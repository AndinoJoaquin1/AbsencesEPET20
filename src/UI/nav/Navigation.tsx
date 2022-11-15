import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "../screens/LoginForm";
import MainMenu from "../screens/MainMenu";
import MenuProfesores from "../screens/MenuProfesores";
import MenuInasistencias from "../screens/MenuInasistencias";
import FormProfesores from "../screens/FormProfesores";;
import ModProfesor from "../screens/ModProfesor";
import Registro from "../screens/Registro";
import { useAuth } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";
import ModProfesorAusente from "../screens/ModProfesorAusente";

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
    id: string,
    lastName: string,
    firstName: string,
  };
  Registro;
  SplashScreen;
  ModProfesorAusente;
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
        {loading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        ) : null}

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
                title: "Absences EPET20",
              }}
            />
            <Stack.Screen name="MenuProfesores" component={MenuProfesores} options={{
              title: "Profesores",
            }} />
            <Stack.Screen
              name="MenuInasistencias"
              component={MenuInasistencias}
              options={{
                title: "Profesores Ausentes",
              }}
            />
            <Stack.Screen name="FormProfesores" component={FormProfesores}
              options={{
                title: "Cargar Profesores",
              }} />
            <Stack.Screen name="ModProfesor" component={ModProfesor}
              options={{
                title: "Marcar Profesor",
              }} />
              <Stack.Screen name="ModProfesorAusente" component={ModProfesorAusente}
              options={{
                title: "Marcar Profesor",
              }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
