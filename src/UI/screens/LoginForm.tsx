import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Button, Center, FormControl, Heading,  Input, Text} from "native-base";
import React,{useState} from "react";
import { useAuth } from "../context/AuthContext";
import { RootStackParams } from "../nav/Navigation";
import addToast from './../components/Toast';

type PropsNavigation = NativeStackScreenProps<RootStackParams,'Inicio'>

// Componente de login

export default function LoginForm({ navigation }: PropsNavigation) {
  const {login,getError} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState(false);
  

  const handleSubmit = async (e) => {
    try {
      setButtonState(true);
      await login(email, password);
      addToast("Sesion Iniciada");
      navigation.navigate('MainMenu')
      setButtonState(false);
    } catch (e) {
      addToast(getError(e));
      setButtonState(false);
    }
  };
  return (
    <Center flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="xl" fontWeight="600" color="coolGray.800">
          Bienvenido 
          Absences EPET 20
        </Heading>
          <FormControl mt="25">
            <FormControl.Label>Correo</FormControl.Label>
            <Input onChangeText={(value)=>setEmail(value)}/>
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" onChangeText={(value)=>setPassword(value)}/>
          </FormControl>
          <Button mt="5"  colorScheme="darkBlue"
          onPress={handleSubmit}
          isLoading={buttonState}
          >
            Ingresar
          </Button>
          <Button mt="5" colorScheme="blueGray"
          onPress={()=>navigation.navigate('Registro')}
          isLoading={buttonState}
          >
            Registrate
          </Button>
      </Box>
    </Center>
  );
}