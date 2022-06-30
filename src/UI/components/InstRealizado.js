import React from 'react';
import {View,Button,Text} from 'react-native';
import PropTypes from 'prop-types';

export default function InstRealizado(props){
    const{sector,objeto}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha marcado {sector} {objeto} como ausente con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

InstRealizado.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}

InstRealizado.propTypes={
    sector: PropTypes.string.isRequired,
    objeto: PropTypes.string.isRequired,
}