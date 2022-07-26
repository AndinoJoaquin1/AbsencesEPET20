import React from "react";
import {Button, View, Text, StyleSheet} from "react-native";

// menu  para  modificar , dar de alta y consultar los cursos
export default function MenuCursos({navigation}) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.navigate("MainMenu")}>
            </Button>
        
            
            <Text>Cursos</Text>
           
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});