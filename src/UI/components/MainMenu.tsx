import { Box, Button, Center, HamburgerIcon, Heading, Menu, Pressable } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';


// Menu principal 
export  default function MainMenu ({navigation}:PropsNavigation) {
    return(
        <Center w="100%" flex={"1"}>
            <Box safeArea w="90%">
                <Button colorScheme="darkBlue" size="lg">Inasistencia</Button>
            </Box>
        </Center>
    );
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});*/

    /*<View style={styles.container}>
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
        onPress={()=>{navigation.navigate('MenuCursos')}}/>
        <Button 
        title="Materias"
        onPress={()=>{navigation.navigate('MenuMaterias')}}/>
        </View>*/
        
        /*<Menu 
        w="100"
        trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
        <HamburgerIcon />
        </Pressable>;
        }}>
            <Menu.Item>Salir</Menu.Item>
        </Menu>
        title="Cursos"*/