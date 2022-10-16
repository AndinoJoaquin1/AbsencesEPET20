import React from "react";
import { AlertDialog, Box, Button, Heading, Pressable, Text } from "native-base";
import RNDateTimePicker from "@react-native-community/datetimepicker";

interface Props{
  nombre:string,
  apellido:string,
  materia:string,
  curso:string,
}

const PressableProfesor = ({nombre, apellido, curso, materia}:Props) => {
  
  
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);
  
  const cancelRef = React.useRef(null);

  return (
    
    <Box safeArea>
      {/*card*/}
      <Pressable
        marginX="5"
        onPress={()=>setIsOpen(true)}
      >
        {({ isPressed }) => { return(
          <Box bg={isPressed? "gray.300": "white"} p="5" shadow="8" rounded="10" m="1"
          style={{
            transform:[{ scale: isPressed ? 0.9 : 1}],
            
          }}
          >
            <Heading fontSize="18">{nombre} {apellido}</Heading>
            <Text mt="5">{materia}</Text>
            <Text>{curso}</Text>
          </Box>
        )
        }} 
      </Pressable>
       {/*popup*/}
      <AlertDialog safeArea leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Notificar Ausencia</AlertDialog.Header>
          <AlertDialog.Body>
            <Text>
            Esta a punto de notificar a {nombre} como ausente. 
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Continuar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
};

export default PressableProfesor;
