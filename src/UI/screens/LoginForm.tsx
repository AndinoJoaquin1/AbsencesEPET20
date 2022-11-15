import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Center, FormControl, Heading,  Input, Text } from "native-base";
import React,{useState} from "react";
import { useAuth } from "../context/AuthContext";
import { RootStackParams } from "../nav/Navigation";

type PropsNavigation = NativeStackScreenProps<RootStackParams,'Inicio'>

// Componente de login

export default function LoginForm({ navigation }: PropsNavigation) {
  const {login,getError} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");
  
  const handleSubmit = async (e) => {
    try {
      setDisplayError("");
      await login(email, password);
      navigation.navigate('MainMenu')
    } catch (e) {
      setDisplayError(getError(e));
    }
  };
  return (
    <Center flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Bienvenido
        </Heading>
          <FormControl mt="25">
            <FormControl.Label>Usuario</FormControl.Label>
            <Input onChangeText={(value)=>setEmail(value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" onChangeText={(value)=>setPassword(value)}/>
          </FormControl>
          <Text mt="1" color="red">{displayError}</Text>
          <Button mt="5"  colorScheme="darkBlue"
          onPress={handleSubmit}
          >
            Ingresar
          </Button>
          <Button mt="5" colorScheme="blueGray"
          onPress={()=>navigation.navigate('Registro')}
          >
            Registrate
          </Button>
      </Box>
    </Center>
  );
}