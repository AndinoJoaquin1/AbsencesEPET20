import React from "react";
import { View, Button, Text,StyleSheet } from "react-native";

// menu  para  modificar el estado , modificar los datos  , dar de alta y consulatar los profesores
export default function MenuProfesores() {
    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});