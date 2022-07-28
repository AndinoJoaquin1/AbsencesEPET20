import React from "react";
import {Button, View, Text } from "react-native";

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