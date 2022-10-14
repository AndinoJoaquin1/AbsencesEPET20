import React from "react";
import {View,Button,StyleSheet} from "react-native";
import {PropsNavigation} from '../interfaces/interfaces';
import { Select , Box, Center ,CheckIcon } from "native-base";
//componente de formulario de carga de cursos
export default function FormCurso ({navigation}:PropsNavigation){
   
        const [service, setService] = React.useState("");
        return(

         <Center w="100%" flex={"1"} >
            <Box   w="90%"    alignItems="center" >
            <Button title="Back" 
            onPress={() => navigation.goBack()}/>



              <Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese El Año" placeholder="Ingrese El Año" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5"   />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Primero " value="ux" />
                <Select.Item label="Segundo " value="ux" />
                <Select.Item label="Tercero " value="ux" />
                <Select.Item label="Cuarto " value="ux" />
                <Select.Item label="Quinto " value="ux" />
                <Select.Item label="Sexto " value="ux" />
              </Select>
            

              <Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese La Divicion" placeholder="Ingrese La Divicion" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Primera " value="ux" />
                <Select.Item label="Segunda " value="ux" />
                <Select.Item label="Tercera " value="ux" />
                <Select.Item label="Cuarta " value="ux" />
                <Select.Item label="Quinta " value="ux" />
                <Select.Item label="Sexta" value="ux" />
              </Select>
            
              <Select selectedValue={service} minWidth="200" accessibilityLabel="Ingrese El Turno " placeholder="Ingrese El Turno" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Mañama " value="ux" />
                <Select.Item label="Tarde " value="ux" />
                <Select.Item label="Vespertino " value="ux" />
              </Select>
            


            
            </Box>
          </Center>

          )
      };
  
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#abd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});