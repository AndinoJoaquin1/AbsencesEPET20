import React from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function LoginForm() {
    return (
        <View>
            <Text>Bienvenido</Text>
            <TextInput placeholder="Usuario"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Ingresar"></Button>
        </View>
    );
}