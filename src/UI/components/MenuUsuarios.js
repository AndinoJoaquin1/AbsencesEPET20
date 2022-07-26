import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function MenuUsuarios({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack(null)}>
            </Button>
            <Text>Usuarios</Text>
            <Button title="Alta Usuario"
            onPress={() => navigation.navigate('FormUser')}>
            </Button>
            <Button title="Consulta Usuario"></Button>
            <Button title="Modificar Usuario"></Button>
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