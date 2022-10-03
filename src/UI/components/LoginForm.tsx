import { Button } from "native-base";
import React from "react";
import { View, TextInput, Text, StyleSheet} from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
// Componente de login
export default function LoginForm({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
            <TextInput placeholder="Usuario"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button
            onPress={()=>navigation.navigate('MainMenu')}
            >    
            Ingresar
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
