import React from "react";
import {Button, View, Text,StyleSheet } from "react-native"; 

//menu para dar de alta , consultar y modificar una materia 

export default function MenuMaterias() {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.navigate("MainMenu")}>
            </Button>
            <Text>Usuarios</Text>
            <Button title="Alta Materia"></Button>
            <Button title="Consulta Materia"></Button>
            <Button title="Modificar Materia"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});