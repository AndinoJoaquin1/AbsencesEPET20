import React from 'react';
import {View,Button,Text} from 'react-native';
//import PropTypes from 'prop-types'; 

// Componente de que se a realizado una alta en en la Base de datos con exito 
export default function AltaRealizado(/*props*/){
    //const{sector,objeto}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha agregado {/*sector*/} {/*objeto*/} con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

/*AltaRealizado.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}*/

/*AltaRealizado.propTypes={
    sector: PropTypes.string.isRequired,
    objeto: PropTypes.string.isRequired,
}*/