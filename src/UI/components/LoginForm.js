import React from "react";
import { View, TextInput, Button, Text, StyleSheet} from "react-native";

// Componente de login
export default function LoginForm({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Bienvenido</Text>
            <TextInput placeholder="Usuario"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button 
            title="Ingresar" 
            onPress={()=>navigation.navigate('MainMenu')}>
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
