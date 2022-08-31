import React from "react";
import {Button, View, Text,StyleSheet } from "react-native"; 
import {PropsNavigation} from '../interfaces/interfaces';
//menu para dar de alta , consultar y modificar una materia 

export default function MenuMaterias({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Text>Materias</Text>
            <Button title="Alta Materia"/>
            <Button title="Consulta Materia"/>
            <Button title="Modificar Materia"/>
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