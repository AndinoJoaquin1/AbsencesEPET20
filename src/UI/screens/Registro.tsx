import React, { useState,useEffect } from "react";
import { Box, Button, Center, FormControl, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import { auth } from "../database/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

type PropsNavigation = NativeStackScreenProps<RootStackParams,'Registro'>

// registro de ususario
export default function Registo({ navigation }: PropsNavigation) {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [formState, setFormState] = useState(false);

  const emailSyntaxVerify = (value) =>{
    const syntax = /^[a-zA-Z0-9_.-]+@gmail+.com/;
    if (!syntax.test(value)){
      console.log('ta male')
    }else{
      console.log("ta biene")
    }
}
  const passwordSyntaxVerify = (value) => {
    const syntax = /^[A-Za-z0-9]+$/;
    if (syntax.test(value)&&value.length>=8&&value.length<=16){
      console.log("ta bienp")
    }else{
      console.log("ta malp")
    }
  }

  const handleSingUp = async () => {
      await createUserWithEmailAndPassword(auth,email, firstPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(e=>alert(e.message))
    }

    

  return (
    <Center safeArea>
      <Box mt="25%" width="90%">
        <Input placeholder="Mail" onChangeText={(value) => emailSyntaxVerify(value)} />
        <FormControl isInvalid={formState}>
        <Input placeholder="Contraseña" onChangeText={(value) => passwordSyntaxVerify(value)}/>
        <Input placeholder="Repetir Contraseña" onChangeText={(value) => setSecondPassword(value)}/>
        <FormControl.ErrorMessage>
          Error
        </FormControl.ErrorMessage>
        </FormControl>
        <Button 
        
        isDisabled={formState}
        mt="5"
        >Agregar
        </Button>
      </Box>
    </Center>
  );
}

