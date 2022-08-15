import React from "react";
import { View, Button, Text,StyleSheet } from "react-native";

// menu  para  modificar el estado , modificar los datos  , dar de alta y consulatar los profesores
export default function MenuProfesores({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack(null)}>
            </Button>
            <Text> Profesores</Text>
            <Button title="Marcar Inasistencia"></Button>
            <Button title="Alta Profesor"
            onPress={() => navigation.navigate('FormProfesores')}>
            </Button>
            <Button title="Consulta Profesor"></Button>
            <Button title="Modificar Profesor"></Button>

        </View>
<<<<<<< HEAD
    )}
=======
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
>>>>>>> da6afeaf95ac3bf769c8b806bee5bd003405619e
