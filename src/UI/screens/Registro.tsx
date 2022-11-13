import React, { useState } from "react";
import { Box, Button, Center, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import { auth } from "../database/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

type PropsNavigation = NativeStackScreenProps<RootStackParams,'Registro'>

// registro de ususario
export default function Registo({ navigation }: PropsNavigation) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSingUp = () => {
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(e=>alert(e.message))
    }

  return (
    <Center safeArea>
      <Box mt="25%" width="90%">
        <Input 
        placeholder="Mail" onChangeText={(value) => setEmail(value)} />
        <Input
        placeholder="Contraseña" onChangeText={(value) => setPassword(value)}
        />
        <Button onPress={handleSingUp}>Agregar</Button>
      </Box>
    </Center>
  );
}
