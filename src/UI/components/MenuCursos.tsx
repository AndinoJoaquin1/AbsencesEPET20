import React from "react";
import {Button, View, Text, StyleSheet} from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
// menu  para  modificar , dar de alta y consultar los cursos
export default function MenuCursos({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
        
            <Text>Cursos</Text>
           
            <Button 
            title="Alta Curso"
            onPress={()=>navigation.navigate('')}/>
           
            <Button 
            title="Consulta Curso"
            onPress={()=>navigation.navigate('')}/>
        
            <Button 
            title="Modificar Curso"
            onPress={()=>navigation.navigate('')}/>
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