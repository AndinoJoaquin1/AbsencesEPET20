import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { Box, Center, Text, View } from 'native-base';
import React from 'react';
import { database } from '../database/FirebaseConfig';

interface Props{
    id:string,
    firstName:string,
    lastName:string
}

const ModProfesor = ({id}:Props) => {

    const docRef = doc(database, "prueba", id); //Ahi que buscar al manera de que el hijo de remil puta pueda buscar el doc por id
    const getDocbyId = getDoc(docRef)
    .then((doc)=>{
        console.log(doc.data(), doc.id);
    })  
    return (
        <Center>
            <Box>
                <Text>
                    {/*lastName} {firstName*/}
                </Text>
                
            </Box>
        </Center>
    );
}

export default ModProfesor;