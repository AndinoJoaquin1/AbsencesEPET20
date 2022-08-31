import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {PropsNavigation} from '../interfaces/interfaces';
// Componente  para  confirmar   una inasistencia  

export default function InstConfirmacion({navigation}:PropsNavigation) {   
    return(
        <View style={styles.container}>
            <Text>¿Desea marcar al Profesor/a *Objeto* como ausente?</Text>
            <Button title="Si"
            onPress={() => navigation.navigate('InstRealizado')}/>
            <Button title="No"
            onPress={() => navigation.goBack()}/>
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