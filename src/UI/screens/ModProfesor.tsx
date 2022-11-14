import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { Box, Button, Center, HStack, Text, View,Select ,Input,CheckIcon} from 'native-base';
import React,{useState} from 'react';
import { database } from '../database/FirebaseConfig';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParams } from '../nav/Navigation';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {PropsNavigation} from '../interfaces/interfaces';
 

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
            <Box safeArea p="2" py="8" w="90%" maxW="290" >
            <Button title="Back" 
        onPress={() => navigation.goBack()}/> 
                <HStack space={2} justifyContent="center">
            
<Select selectedValue={service} minWidth="200" accessibilityLabel="Ingre la hora de inasistencia" placeholder="Ingre la hora de inasistencia " _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5"   />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Primera " value="ux" />
                <Select.Item label="Segunda " value="ux" />
                <Select.Item label="Tercera " value="ux" />
                <Select.Item label="Cuarta " value="ux" />
                <Select.Item label="Quinta " value="ux" />
                <Select.Item label="Sexta " value="ux" />
                <Select.Item label="Septima " value="ux" />
              </Select>
            
            
              <Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese la materia " placeholder="Ingrese la materia " _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Matematica " value="ux" />
                <Select.Item label="Fisica" value="ux" />
                <Select.Item label="Ingles  " value="ux" />
                <Select.Item label="S.O " value="ux" />
                <Select.Item label="Dibujo " value="ux" />
                <Select.Item label="Lengua" value="ux" />
              </Select>


              <Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese la cantidad de dias " placeholder="Ingrese la cantidad de dias" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Uno(1) " value="ux" />
                <Select.Item label="Dos(2)" value="ux" />
                <Select.Item label="Tres(3) " value="ux" />
                <Select.Item label="Cuatro(4)" value="ux" />
                <Select.Item label="Cinco (5) " value="ux" />
                <Select.Item label="Otro " value="ux" />
              </Select>

  
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