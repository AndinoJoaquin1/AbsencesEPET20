import React from "react";
import {Button,Center,Box  } from "native-base"; 
import {StyleSheet } from "react-native"
import {PropsNavigation} from '../interfaces/interfaces';
//menu para dar de alta , consultar y modificar una materia 

export default function MenuMaterias({navigation}:PropsNavigation) {
    return (
        <Center w="100%" flex={"1"}>
        <Box  safeArea w="90%"    alignItems="center" >
       
            <Button onPress={() => navigation.goBack()} colorScheme="blue" size="lg">         Back         </Button>
        
            
           
            <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('FormMateria')}
            >      Cargar Materia      </Button>
        
            <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('')} 
            > Consulta Materia </Button>
        
            <Button margin="5"colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('')}>
            Modificar Materia
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