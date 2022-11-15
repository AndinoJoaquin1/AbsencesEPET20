import React from "react";
import {Button, View, Text,  Box,Center} from "native-base";
import { StyleSheet } from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
// menu  para  modificar , dar de alta y consultar los cursos
export default function MenuCursos({navigation}:PropsNavigation) {
    return (
        <Center w="100%" flex={"1"}>
        <Box  safeArea w="90%"    alignItems="center" >
       
            <Button onPress={() => navigation.goBack()} colorScheme="blue" size="lg">         Back         </Button>
        
     
            <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('FormCurso')}
            >     Alta Curso     </Button>
        
            <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('')} 
            > Consulta Curso </Button>
        
            <Button margin="5"colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('')}>
            Modificar Curso
            </Button>
      
        </Box>
        </Center>
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