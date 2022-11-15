import React from "react";
import { Box, Button, Center, Input } from "native-base";
import { database } from '../database/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";

type PropsNavigation = NativeStackScreenProps<RootStackParams,'FormProfesores'>

// Componente de formulario de carga de profesores
export default function FormProfesores ({navigation}:PropsNavigation){

    const [newProfesor, setNewProfesor] = React.useState({
        firstName:'',
        lastName:'',
        materia:'',
        curso:''
    })

    const Send = async () => {
        await addDoc(collection(database, 'prueba'), newProfesor);
        console.log("ok");
    }

    return(
        <Center safeArea>
            <Box mt="25%">
                <Input placeholder="nombre" onChangeText={(value) => setNewProfesor({...newProfesor, firstName:value})}/>
                <Input placeholder="apellido" onChangeText={(value) => setNewProfesor({...newProfesor, lastName:value})}/>
                <Input placeholder="materia" onChangeText={(value) => setNewProfesor({...newProfesor, materia:value})}/>
                <Input placeholder="curso" onChangeText={(value) => setNewProfesor({...newProfesor, curso:value})}/>
                <Button onPress={Send}>
                    Agregar
                </Button>
            </Box>
        </Center>
    );
}
