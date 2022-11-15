import React from "react";
import { Box, Button, Center, Input, Toast } from "native-base";
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
        curso:'',
        ausente:false
    })

    const addToast=()=> {
        Toast.show({
         title: "Profesor Agregado"
       });
     }

    const Send = async () => {
        await addDoc(collection(database, 'prueba'), newProfesor);
        addToast()
        navigation.goBack()
    }

    return(
        <Center safeArea>
            <Box mt="25%" w="90%">
                <Input placeholder="Nombre" onChangeText={(value) => setNewProfesor({...newProfesor, firstName:value})} />
                <Input placeholder="Apellido" onChangeText={(value) => setNewProfesor({...newProfesor, lastName:value})} mt="5"/>
                <Input placeholder="Materia" onChangeText={(value) => setNewProfesor({...newProfesor, materia:value})} mt="5"/>
                <Input placeholder="Curso" onChangeText={(value) => setNewProfesor({...newProfesor, curso:value})} mt="5"/>
                <Button onPress={Send} colorScheme="darkBlue" mt="10">
                    Agregar
                </Button>
            </Box>
        </Center>
    );
}
