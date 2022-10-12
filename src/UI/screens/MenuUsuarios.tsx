import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {PropsNavigation} from '../interfaces/interfaces';

export default function MenuUsuarios({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Text>Usuarios</Text>
            <Button title="Alta Usuario"
            onPress={() => navigation.navigate('FormUser')}/>
            <Button title="Consulta Usuario"/>
            <Button title="Modificar Usuario"/>
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