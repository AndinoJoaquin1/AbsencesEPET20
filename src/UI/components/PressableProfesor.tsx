import React from "react";
import { AlertDialog, Box, Button, Heading, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

interface Props{
  id:string,
  firstName:string,
  lastName:string,
  materia:string,
  curso:string,
  onPress: (id:string)=>void
}

const PressableProfesor = ({onPress,id,firstName, lastName, curso, materia}:Props) => {
  return (    
    <Box safeArea>
      {/*card*/}
      <Pressable
        marginX="5"
        onPress={()=> onPress(id)}
      >
        {({ isPressed }) => { return(
          <Box bg={isPressed? "gray.300": "white"} p="5" shadow="8" rounded="10" m="1"
          style={{
            transform:[{ scale: isPressed ? 0.9 : 1}],
            
          }}
          >
            <Heading fontSize="18">{lastName} {firstName}</Heading>
            <Text mt="5">{materia}</Text>
            <Text>{curso}</Text>
          </Box>
        )
        }} 
      </Pressable>
    </Box>
  );
};

export default PressableProfesor;
