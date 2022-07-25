import React from "react";
import {Button, View, Text } from "react-native";

// menu  para  modificar , dar de alta y consultar los cursos
export default function MenuCursos() {
    return (
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Usuarios</Text>
            <Button title="Alta Curso"></Button>
            <Button title="Consulta Curso"></Button>
            <Button title="Modificar Curso"></Button>
        </View>
    );
}