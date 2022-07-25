import React from "react";
import {Button, View, Text } from "react-native";

// menu  para  modificar , dar de alta y consultar los cursos
export default function MenuCursos({navigation}) {
    return (
        <View>
            <Button title="Back"></Button>
           
            <Button
            title="Home"
            onPress={()=>navigation.navigate('MainMenu')}>
            </Button>
            
            <Text>Usuarios</Text>
           
            <Button 
            title="Alta Curso"
            onPress={()=>navigation.navigate('')}>
            </Button>
           
            <Button 
            title="Consulta Curso"
            onPress={()=>navigation.navigate('')}>
            </Button>
           
            <Button 
            title="Modificar Curso"
            onPress={()=>navigation.navigate('')}>
            </Button>
        </View>
    );
}