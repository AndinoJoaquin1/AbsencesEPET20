import React from "react";
import {View,TextInput,StyleSheet} from "react-native";
import { Select , Box, Center ,CheckIcon, FormControl,Input,Button } from "native-base";
import SelectDropdown from "react-native-select-dropdown";
import {PropsNavigation} from '../interfaces/interfaces';
 
// Componente de formulario de carga de usuario 
export default function FormUser ({navigation}:PropsNavigation){



  const [service, setService] = React.useState("");
    const Tipo=["Directivo/a","Secretario/a","Preceptor/a"];
    return(
        <Center flex={2}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
     
        <Button margin="3" colorScheme="blue" size="lg"
            onPress={()=>navigation.goBack()}
            >     Back    </Button>

     <Button margin="3" colorScheme="blue" size="lg"
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
             
             
<Select selectedValue={service} minWidth="200" accessibilityLabel="Ingre el tipo de usuario" placeholder="Ingre el tipo de usuaro
" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5"   />
            }} mt={10} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Preceptor/a " value="ux" />
                <Select.Item label="Secretario/a " value="ux" />
                <Select.Item label="Directivo/a " value="ux" />
            
              </Select> 
             
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