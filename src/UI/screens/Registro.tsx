import React, { useState,useEffect } from "react";
import { Box, Button, Center, FormControl, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import {useAuth} from '../context/AuthContext';
import { auth } from "../database/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

type PropsNavigation = NativeStackScreenProps<RootStackParams,'Registro'>

// registro de ususario
export default function Registro({ navigation }: PropsNavigation) {
  const {signUp} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSingUp = async () => {
      try{
        await signUp (email,password)
      }catch(e){
        console.log(e.message)
      }
    }

    

  return (
    <Center safeArea>
      <Box mt="25%" width="90%">
        <FormControl>
        <Input placeholder="Mail" onChangeText={(value) => setEmail(value)} />
        <FormControl.ErrorMessage>
    
        </FormControl.ErrorMessage>
        </FormControl>

        <FormControl >
        <Input placeholder="Contraseña" onChangeText={(value) => setPassword(value)}/>
        <FormControl.ErrorMessage>

        </FormControl.ErrorMessage>
        </FormControl>
        <Button 
        onPress={handleSingUp}
        mt="5"
        >Agregar
        </Button>
      </Box>
    </Center>
  );
}

