import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';


// Menu principal 
export  default function MainMenu ({navigation}:PropsNavigation) {
    return(
        <View style={styles.container}>
            <Button 
            title="Cerrar session"
            onPress={() => navigation.navigate('Inicio')}/>
            <Text> Hola Usuario </Text>
            <Button 
            title="Usuarios"
            onPress={() => navigation.navigate('MenuUsuarios')}/>
            <Button 
            title="Profesores"
            onPress={()=>{navigation.navigate('MenuProfesores')}}/>
            <Button 
            title="Cursos"
            onPress={()=>{navigation.navigate('MenuCursos')}}/>
            <Button 
            title="Materias"
            onPress={()=>{navigation.navigate('MenuMaterias')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
