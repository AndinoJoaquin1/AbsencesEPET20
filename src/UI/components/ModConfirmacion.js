import React from 'react';
import {View,Button,Text} from 'react-native';

export default function ModConfimracion(props){
    const{sector,objeto}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha modificado {sector} {objeto} con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

ModConfimracion.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}