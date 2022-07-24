import React from "react";
import { View, TextInput, Button, Text, StyleSheet} from "react-native";

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
            <TextInput placeholder="Usuario"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button> 
            </Button>
        </View>
    );
}

