import React from "react";
import {View,TextInput,StyleSheet} from "react-native";
import { Select , Box, Center ,CheckIcon, FormControl,Input,Button } from "native-base";
import SelectDropdown from "react-native-select-dropdown";
import {PropsNavigation} from '../interfaces/interfaces';
 
// Componente de formulario de carga de usuario 
export default function FormUser ({navigation}:PropsNavigation){




    const Tipo=["Directivo/a","Secretario/a","Preceptor/a"];
    return(
        <Center flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
     
        <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.goBack()}
            >     Back    </Button>

     <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('MainMenu')}
            >     Menu     </Button>
        

          
            <FormControl  mt="25">
            <FormControl.Label>Usuario</FormControl.Label>
            <Input />
          </FormControl>

            <FormControl  mt="25">
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password"  /> 
            </FormControl>


            <FormControl  mt="25">
            <FormControl.Label>Nombre</FormControl.Label>
            <Input />
          </FormControl>

          
            <FormControl  mt="25">
            <FormControl.Label>Apellido</FormControl.Label>
            <Input />
          </FormControl>   

          
            <FormControl  mt="25">
            <FormControl.Label>D.N.I</FormControl.Label>
            <TextInput keyboardType="numeric" />
            <Input  maxLength={8}  />
          </FormControl>         

          
          <FormControl  mt="25">
            <FormControl.Label>N° De telefono </FormControl.Label>
            <Input  maxLength={13} />
          </FormControl>
             
                <Button margin="5" colorScheme="blue" size="lg"
            onPress={()=>navigation.navigate('AltaRealizado')}
            >     Cargar Usuario     </Button>
        

        </Box>
    </Center>
    
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