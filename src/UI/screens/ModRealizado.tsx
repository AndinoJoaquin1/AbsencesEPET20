import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';

// Componente que confirma una modificacion exitosa 
export default function ModRealizado(){
    return(
        <View>
            <Button title="Back"/>
            <Button title="Home"/>
            <Text>Se ha modificado *sector* *objeto* con exito</Text>
            <Button title="Continuar"/>
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