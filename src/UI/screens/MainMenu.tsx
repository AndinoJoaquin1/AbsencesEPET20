import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Center, HamburgerIcon, Heading, Menu, Pressable } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import Navigation, { RootStackParams } from "../nav/Navigation";

type PropsNavigation = NativeStackScreenProps<RootStackParams, 'MainMenu'>
// Menu principal 
export  default function MainMenu ({navigation}:PropsNavigation) {
    return(
        <Center w="100%" flex={"1"}>
            <Box safeArea w="90%"  alignItems="center" >

                <Button colorScheme="orange" size="lg" margin="5"   
                onPress={()=>navigation.navigate('MenuProfesores')}
                >       Inasistencia       </Button>

                   <Button colorScheme="pink" size="lg" margin="5"  
                onPress={()=>navigation.navigate('MenuCursos')}
                >          Cursos          </Button>

                <Button colorScheme="blue" size="lg" margin="5"
                onPress={()=>navigation.navigate('MenuInasistencias')}
                >Lista De profesores</Button>

                <Button colorScheme="yellow" size="lg" margin="5"
                onPress={()=>navigation.navigate('MenuMaterias')}
                >        Materias        </Button>
            
                <Button colorScheme="violet" size="lg" margin="5"
                onPress={()=>navigation.navigate('MenuUsuarios')}
                >         Usuario         </Button>

                 
            </Box>
        </Center>
    );
}