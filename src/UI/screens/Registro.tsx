import React, { useState } from "react";
import { Box, Button, Center, FormControl, Input, Text } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import { useAuth } from "../context/AuthContext";
import addToast from "../components/Toast";

type PropsNavigation = NativeStackScreenProps<RootStackParams, "Registro">;

// registro de ususario
export default function Registro({ navigation }: PropsNavigation) {
  const { signUp, getError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [buttonState, setButtonState] = useState(false);


  const handleSingUp = async () => {
    try {
      setButtonState(true)
      await signUp(email, password);
      addToast("Correo Registrado");
      navigation.goBack();
      setButtonState(false)
    } catch (e) {
      addToast(getError(e));
      setButtonState(false)
    }
  };

  const verifyPassword = () => {
    if (password != passwordTwo) {
      addToast("Las contaseñas deben ser iguales");
    } else {
      handleSingUp();
    }
  };

  return (
    <Center safeArea>
      <Box mt="20" width="90%">
        <FormControl>
          <FormControl.Label>Correo</FormControl.Label>
          <Input
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
          />
        </FormControl>

        <FormControl>
          <FormControl.Label mt="5">Contraseña</FormControl.Label>
          <Input
            type="password"
            placeholder="Contraseña"
            onChangeText={(value) => setPassword(value)}
          />
          <Input
            type="password"
            placeholder="Confirme Contraseña"
            onChangeText={(value) => setPasswordTwo(value)}
            mt="2"
          />
        </FormControl>
        <Button
          isLoading={buttonState}
          colorScheme="darkBlue"
          isDisabled={buttonState}
          onPress={verifyPassword}
          mt="5"
        >
          Agregar
        </Button>
      </Box>
    </Center>
  );
}
