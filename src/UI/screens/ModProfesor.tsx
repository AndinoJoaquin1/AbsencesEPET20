import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Box, Button, Text, Toast } from "native-base";
import React, { useState } from "react";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import addToast from './../components/Toast';

type Props = NativeStackScreenProps<RootStackParams, "ModProfesor">;

const ModProfesor = ({ route, navigation }: Props) => {
  const [buttonState, setButtonState] = useState(false);

  const idRef = route.params.id;
  const docRef = doc(database, "prueba", idRef);

  const handleUpdate = async () => {
    try {
      setButtonState(true)
      await updateDoc(docRef, {
        ausente: true,
      });
      addToast("Profesor Marcado");
      navigation.popToTop();
      setButtonState(false)
    } catch (e) {
      addToast(e.message);
      setButtonState(false)
    }
  };

  return (
    <Box safeArea alignSelf="center" flex="1">
      <Text mt="50%">
        ¿Desea marcar a {route.params.firstName} {route.params.lastName} como
        ausente?
      </Text>
      <Button colorScheme="darkBlue" mt="10" onPress={handleUpdate} isDisabled={buttonState}>
        Aceptar
      </Button>
    </Box>
  );
};

export default ModProfesor;
