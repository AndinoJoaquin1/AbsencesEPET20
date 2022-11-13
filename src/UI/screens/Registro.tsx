import React from "react";
import { Box, Button, Center, Input } from "native-base";
import { database } from '../database/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import {auth} from "../firebase"

// registro de ususario
export default function registo ({navigation}:PropsNavigation){

   
const Registro =() => {
    cost [email,  setEmail] = useState('')
    cost [password , setPassword] = useState('')
}

const handlesingup =() => {
    auth 
    .createUserWithEmailandPassword(email, password )
.then(userCredentials => {
    const user = userCredentials.user;
    console.log(user.email);
})
}

    const Send = async () => {
        await addDoc(collection(database, 'prueba'), newUsuruario);
        console.log("ok");
    }

    return(
        <Center safeArea>
            <Box mt="25%">
                <Input placeholder="Mail" onChangeText={(value) => setNewProfesor({...newUsuruario, email:value})}/>
                <Input placeholder="Usuario" onChangeText={(value) => setNewProfesor({...newUsuruario, user:value})}/>
                <Input placeholder="Contraseña " onChangeText={(value) => setNewProfesor({...newUsuruario, password:value})}/>
                <Input placeholder="Confirmar Contrasñe" onChangeText={(value) => setNewProfesor({...newUsuruario, confpassword:value})}/>
                <Button onPress={Send}>
                    Agregar
                </Button>
            </Box>
        </Center>
    );
}
