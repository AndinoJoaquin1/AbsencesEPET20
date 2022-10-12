import { Box, Button, Center, HamburgerIcon, Heading, Menu, Pressable } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
import Navigation from "../nav/Navigation";


// Menu principal 
export  default function MainMenu ({navigation}:PropsNavigation) {
    return(
        <Center w="100%" flex={"1"}>
            <Box safeArea w="90%">
                <Button colorScheme="darkBlue" size="lg"
                onPress={()=>navigation.navigate('MenuProfesores')}
                >Inasistencia</Button>
            </Box>
        </Center>
    );
}