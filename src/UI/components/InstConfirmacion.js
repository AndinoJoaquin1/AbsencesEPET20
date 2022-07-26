import React from 'react';
import {View,Button,Text} from 'react-native';
//import PropTypes from 'prop-types';

// Componente  para  confirmar   una inasistencia  

export default function InstConfirmacion(/*props*/){
    //const{objeto}=props;
    return(
        <View>
            <Text>¿Desea marcar al Profesor/a {/*objeto*/} como ausente?</Text>
            <Button title="Si"></Button>
            <Button title="No"></Button>
        </View>
    );
}

/*InstConfirmacion.defaultProps={
    objeto:"Ejemplo",
}

InstConfirmacion.propTypes={
    objeto: PropTypes.string.isRequired,
}*/