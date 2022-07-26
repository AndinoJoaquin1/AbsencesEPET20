import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
//import PropTypes from 'prop-types';

// Componente  para  confirmar   una inasistencia  

export default function InstConfirmacion(/*props*/{navigation}) {
    //const{objeto}=props;
    return(
        <View style={styles.container}>
            <Text>¿Desea marcar al Profesor/a {/*objeto*/} como ausente?</Text>
            <Button title="Si"
            onPress={() => navigation.navigate('InstRealizado')}>
            </Button>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});