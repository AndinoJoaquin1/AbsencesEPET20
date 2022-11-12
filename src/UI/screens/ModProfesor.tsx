import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { Box, Center, Text, View } from 'native-base';
import React from 'react';
import { database } from '../database/FirebaseConfig';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParams } from '../nav/Navigation';

type Props = NativeStackScreenProps<RootStackParams, 'ModProfesor'>;

const ModProfesor = ({route}:Props) => {

    const idRef = route.params.id
    const docRef = doc(database, "prueba", idRef ); //Ahi que buscar al manera de que el hijo de remil puta pueda buscar el doc por id
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