import { Box, Button, Center, FormControl, Heading,  Input } from "native-base";
import React from "react";
import { PropsNavigation } from "../interfaces/interfaces";

// Componente de login

export default function LoginForm({ navigation }: PropsNavigation) {
  return (
    <Center flex={1}>
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
          <Button mt="2"  marginTop="12" colorScheme="darkBlue"
          onPress={()=> navigation.navigate('MainMenu')}
          >
            Ingresar
          </Button>
      </Box>
    </Center>
  );
}