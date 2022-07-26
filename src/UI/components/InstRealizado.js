import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
//import PropTypes from 'prop-types';

// Componente de confirmacion de que se a marcado una inasistencia con exito
export default function InstRealizado(/*props*/{navigation}) {
    //const{sector,objeto}=props;
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack(null)}>
            </Button>
            <Button title="Home"
            onPress={() => navigation.navigate('MainMenu')}>
            </Button>
            <Text>Se ha marcado *TipoObjeto* *Objeto*{/*sector*/} {/*objeto*/} como ausente con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

/*InstRealizado.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}

InstRealizado.propTypes={
    sector: PropTypes.string.isRequired,
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