import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
//import PropTypes from 'prop-types'; 

// Componente de que se a realizado una alta en en la Base de datos con exito 
export default function AltaRealizado(/*props*/{navigation}){
    //const{sector,objeto}=props;
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.navigation('MenuUsuarios')}>
            </Button>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});