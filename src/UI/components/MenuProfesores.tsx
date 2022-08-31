import React from "react";
import { View, Button, Text,StyleSheet } from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
// menu  para  modificar el estado , modificar los datos  , dar de alta y consulatar los profesores
export default function MenuProfesores({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Text> Profesores</Text>
            <Button title="Marcar Inasistencia"></Button>
            <Button title="Alta Profesor"
            onPress={() => navigation.navigate('FormProfesores')}/>
            <Button title="Consulta Profesor"/>
            <Button title="Modificar Profesor"/>

        </View>
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
