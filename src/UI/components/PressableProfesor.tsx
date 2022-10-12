import React from "react";
import { Box, Heading, Pressable, Text, View } from "native-base";

interface Props{
  nombre:string,
  apellido:string,
  materia:string,
  curso:string
}

const PressableProfesor = ({nombre, apellido, curso, materia}:Props) => {
  return (
    <Box safeArea>
      <Pressable
        marginX="5"
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
    </Box>
  );
};

export default PressableProfesor;
