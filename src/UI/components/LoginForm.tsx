import { Box, Button, Center, FormControl, Heading,  Input } from "native-base";
import React from "react";
import { PropsNavigation } from "../interfaces/interfaces";

// Componente de login

export default function LoginForm({ navigation }: PropsNavigation) {
  return (
    <Center w="100%" flex={1}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Bienvenido
        </Heading>
          <FormControl mt="25">
            <FormControl.Label>Usuario</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="blue" marginTop="12"
          onPress={()=> navigation.navigate('MainMenu')}
          >
            Ingresar
          </Button>
      </Box>
    </Center>
  );
}