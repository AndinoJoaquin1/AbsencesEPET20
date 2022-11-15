import React from "react";
import {View,StyleSheet} from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
import {Button} from "native-base"; 
import { Select , Box, Center ,CheckIcon, FormControl,Input } from "native-base";
// Componente de formulario de carga de Materias



export default function FormMateria ({navigation}:PropsNavigation){
    const [service, setService] = React.useState("");
    const [curso, setCurso] = React.useState("");
    const [turno, setTurno] = React.useState("");
    return(
        
        <Center w="100%" flex={"1"} >
        <Box   safeArea p="2" py="8" w="90%" maxW="290" >
        <Button onPress={() => navigation.goBack()} colorScheme="blue" size="lg">         Back         </Button>
 

<FormControl mt="25">
            <FormControl.Label>Ingrese el nombre de la materia    </FormControl.Label>
            <Input />
          </FormControl>

<Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese El Año" placeholder="Ingrese El Año" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5"   />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Primero " value="Primero" />
                <Select.Item label="Segundo " value="Segundo" />
                <Select.Item label="Tercero " value="Tercero" />
                <Select.Item label="Cuarto " value="Cuarto" />
                <Select.Item label="Quinto " value="Quinto" />
                <Select.Item label="Sexto " value="Sexto" />
              </Select>
            

              <Select selectedValue={curso} minWidth="200" accessibilityLabel="Ingrese La Division" placeholder="Ingrese La Division" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setCurso(itemValue)}>
                <Select.Item label="Primera " value="1" />
                <Select.Item label="Segunda " value="2" />
                <Select.Item label="Tercera " value="3" />
                <Select.Item label="Cuarta " value="4" />
                <Select.Item label="Quinta " value="5" />
                <Select.Item label="Sexta" value="6" />
              </Select>
            
              <Select selectedValue={turno} minWidth="200" accessibilityLabel="Ingrese El Turno " placeholder="Ingrese El Turno" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setTurno(itemValue)}>
                <Select.Item label="Mañama " value="Mañana" />
                <Select.Item label="Tarde " value="Tarde" />
                <Select.Item label="Vespertino " value="Vespertino" />
              </Select>
              <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('AltaRealizado')}
            >     Cargar Materia     </Button>
 


            
            </Box>
          </Center>
// turno , divicion y año  y nombre  - imput

           
            
   );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});