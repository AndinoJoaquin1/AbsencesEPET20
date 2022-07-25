// menu  para  modificar el estado , modificar los datos  , dar de alta y consulatar los profesores

import React from "react";
import { View, Button, Text } from "react-native";

export default function MenuProfesores() {
    return (
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text> Profesores</Text>
            <Button title="Marcar Inasistencia"></Button>
            <Button title="Alta Profesor"></Button>
            <Button title="Consulta Profesor"></Button>
            <Button title="Modificar Profesor"></Button>
        </View>
    );
}