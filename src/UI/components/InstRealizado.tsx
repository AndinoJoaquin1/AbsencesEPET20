import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {PropsNavigation} from '../interfaces/interfaces';

// Componente de confirmacion de que se a marcado una inasistencia con exito
export default function InstRealizado({navigation}:PropsNavigation) {
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Text>Se ha marcado *TipoObjeto* *Objeto* como ausente con exito</Text>
            <Button title="Continuar"
            onPress={() => navigation.navigate('MainMenu')}/>
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