import React from "react";
import { Box, Button, Center, Input } from "native-base";
import { database } from '../database/FirebaseConfig';
import {PropsNavigation} from '../interfaces/interfaces';
import { collection, addDoc } from "firebase/firestore";

// registro de ususario
export default function registo ({navigation}:PropsNavigation){

    const [newUsuruario, setNewProfesor] = React.useState({
        email:'',
        user:'',
        password:'',
        confpassword:''
    })

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
