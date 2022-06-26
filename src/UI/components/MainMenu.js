import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import PropTypes from "prop-types";

export  default function MainMenu (props){
    const{user}=props;
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <Text> Hola {user}</Text>
            <Button title="Usuarios"></Button>
            <Button title="Profesores"></Button>
            <Button title="Cursos"></Button>
            <Button title="Materias"></Button>
        </View>
    );
}

MainMenu.defaultProps={
    user:"14mat"
}

MainMenu.propTypes={
    user: PropTypes.string.isRequired
}