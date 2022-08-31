import React from "react";
import { View, TextInput, Button, Text, StyleSheet} from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
// Componente de login
export default function LoginForm({navigation}:PropsNavigation) {
    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
            <TextInput placeholder="Usuario"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button 
            title="Ingresar" 
            onPress={()=>navigation.navigate('MainMenu')}/>
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
