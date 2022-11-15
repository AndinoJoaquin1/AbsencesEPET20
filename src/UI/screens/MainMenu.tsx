import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Center, HamburgerIcon, Heading, Icon, Menu, Pressable } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import Navigation, { RootStackParams } from "../nav/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-brands-svg-icons";
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
                    onPress={logOut}>
                    Cerrar Session
                </Button>

            </Box>
        </Center>
    );
}