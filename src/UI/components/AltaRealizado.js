import React from 'react';
import {View,Button,Text} from 'react-native';

export default function AltaConfimracion(props){
    const{sector,objeto}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha agregado {sector} {objeto} con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

AltaConfimracion.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}