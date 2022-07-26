import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
//import PropTypes from "prop-types";

// Menu principal 
export  default function MainMenu (/*props*/{navigation}) {
    //const{user}=props;
    return(
        <View style={styles.container}>
            <Button title="Cerrar session"
            onPress={() => navigation.navigate('Inicio')}>
            </Button>
            <Text> Hola Usuario{/*user*/}</Text>
            <Button title="Usuarios"
            onPress={() => navigation.navigate('MenuUsuarios')}>
            </Button>
            <Button title="Profesores"
            onPress={()=>{navigation.navigate('MenuProfesores')}}>
            </Button>
            <Button title="Cursos"
            onPress={()=>{navigation.navigate('MenuCursos')}}>
            </Button>
            <Button title="Materias"
            onPress={()=>{navigation.navigate('MenuMaterias')}}>
            </Button>
            
        </View>
    );
}

/*MainMenu.defaultProps={
    user:"14mat"
}

MainMenu.propTypes={
    user: PropTypes.string.isRequired
}*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
