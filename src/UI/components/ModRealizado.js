import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
//import PropTypes from 'prop-types'; 

// Componente que confirma una modificacion exitosa 
export default function ModRealizado(/*props*/){
    const{sector,objeto}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text>Se ha modificado {/*sector*/} {/*objeto*/} con exito</Text>
            <Button title="Continuar"></Button>
        </View>
    );
}

/*ModRealizado.defaultProps={
    sector:"Al Profesor",
    objeto:"Ejemplo",
}

ModRealizado.propTypes={
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