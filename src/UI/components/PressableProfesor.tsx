import React, { useEffect } from "react";
import { Box, Center, Heading, Pressable, Text } from "native-base";

interface Props{
  id:string,
  firstName:string,
  lastName:string,
  materia:string,
  curso:string,
  onPress: (
    id:string,
    firstName:string,
    lastName:string,
    )=>void
}

const PressableProfesor = ({onPress,id,firstName, lastName, curso, materia}:Props) => {
  useEffect(()=>{
  },[])
  return (   
    <Center >
    <Box safeArea width="full" >
      {/*card*/}
      <Pressable
        marginX="5"
        onPress={()=> onPress(id,firstName,lastName)}
        width="90%"
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
      
      </Center> 
  );
};

export default PressableProfesor;
