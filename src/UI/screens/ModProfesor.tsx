import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { Box, Button, Center, HStack, Text, View } from 'native-base';
import React,{useState} from 'react';
import { database } from '../database/FirebaseConfig';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParams } from '../nav/Navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';

type Props = NativeStackScreenProps<RootStackParams, 'ModProfesor'>;

const ModProfesor = ({route}:Props) => {

    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [showHour, setHour] = useState();

    const showDatePicker = () =>{
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () =>{
        setDatePickerVisibility(false);
    }
    
    const setHour1 = (date) => {
        setHour(date)
    }
    const handleConfirm = (date)=>{
        console.log(date);
        setHour1(date);
    }

    const idRef = route.params.id
    const docRef = doc(database, "prueba", idRef );
    const getDocbyId = getDoc(docRef)
    .then((doc)=>{
        console.log(doc.data(), doc.id);
    })  
    return (
        <Center>
            <Box>
                <HStack space={2} justifyContent="center">
            
                    <Button onPress={showDatePicker}>
                        ola
                    </Button>
                    <Button>
                        caho
                    </Button>
                </HStack>
                    <Text>{showHour}</Text>
                    <DateTimePicker
                    isVisible={datePickerVisibility} //ahi que hacer que la hija de puta pueda guardar la hora.
                    onCancel={hideDatePicker} 
                    onConfirm={handleConfirm}
                    mode="time"/> 
            </Box>
        </Center>
    );
}

export default ModProfesor;