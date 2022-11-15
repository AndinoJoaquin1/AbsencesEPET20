import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Center } from "native-base";
import React from "react";
import { useAuth } from "../context/AuthContext";
import  { RootStackParams } from "../nav/Navigation";
type PropsNavigation = NativeStackScreenProps<RootStackParams, 'MainMenu'>
// Menu principal 

export default function MainMenu({ navigation }: PropsNavigation) {
    const { logOut } = useAuth();
    return (
        <Center w="100%" flex={"1"}>
            <Box safeArea w="90%" alignItems="center" >

                <Button colorScheme="blue" size="lg" w="200" 
                    onPress={() => navigation.navigate('MenuProfesores')}>
                    Profesores
                </Button>


                <Button colorScheme="blue" size="lg" mt="20" w="200"
                    onPress={() => navigation.navigate('MenuInasistencias')}>
                    Profesores Inasistentes
                </Button>


                <Button colorScheme="blue" size="lg" mt="20" w="200"
                    onPress={() => navigation.navigate('FormProfesores')}>
                    Agregar Profesor
                </Button>

                <Button colorScheme="blue" size="lg" mt="20" w="200"
                    onPress={logOut}>
                    Cerrar Session
                </Button>


            </Box>
        </Center>
    );
}