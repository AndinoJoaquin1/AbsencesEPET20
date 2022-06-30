import React from 'react';
import {View,Button,Text} from 'react-native';

export default function AltaConfimracion(props){
    const{sector,item}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha agregado {sector} {item} con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

AltaConfimracion.defaultProps={
    sector:"Al Doctor",
    item:"14Mat",
}