
import React from "react";
import {Button, View, Text } from "react-native";

//menu para dar de alta , consultar y modificar una materia 

export default function MenuMaterias() {
    return (
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Usuarios</Text>
            <Button title="Alta Materia"></Button>
            <Button title="Consulta Materia"></Button>
            <Button title="Modificar Materia"></Button>
        </View>
    );
}