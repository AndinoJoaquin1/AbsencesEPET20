import React from 'react';
import {View,Button,Text} from 'react-native';

export default function InstConfirmacion(props){
    const{objeto}=props;
    return(
        <View>
            <Text>¿Desea marcar al Profesor/a {objeto} como ausente?</Text>
            <Button title="Si"></Button>
            <Button title="No"></Button>
        </View>
    );
}

InstConfirmacion.defaultProps={
    objeto:"Ejemplo",
}