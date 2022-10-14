import React from 'react';
import {View,Button, Center,Box} from 'native-base';
import {PropsNavigation} from '../interfaces/interfaces';

//menu de seleccionamiento de profesor para marcar la inasistencia

export default function MenuInasistencias({navigation}:PropsNavigation) {
    return(
      <Center  w="100%"  flex={"1"}> 
      <Box safeArea p="2" py="8" w="90%" maxW="290"> 
         
            <Button margin="5"
            onPress={() => navigation.goBack()}
            >back</Button>

            <Button  margin="5"
            onPress={() => navigation.goBack()}
            > Profe1 </Button>

            <Button margin="5"
            onPress={() => navigation.goBack()}
            >  Profe2 </Button>

          <Button margin="5"
            onPress={() => navigation.goBack()}
            >  Profe3  </Button>


            <Button margin="5"
            onPress={() => navigation.goBack()}
            >  Profe4  </Button>
            
          
         
            </Box>
            </Center>
    
     
    );
    
 } 
  