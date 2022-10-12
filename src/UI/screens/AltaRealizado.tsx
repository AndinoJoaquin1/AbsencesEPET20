import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {PropsNavigation} from '../interfaces/interfaces';

// Componente de que se a realizado una alta en en la Base de datos con exito 
export default function AltaRealizado({navigation}:PropsNavigation){
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Text>Se ha agregado *TipoObjeto* *Objeto* con exito</Text>
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