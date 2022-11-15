import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Box, Button, Text, Toast } from "native-base";
import React from "react";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";

type Props = NativeStackScreenProps<RootStackParams, "ModProfesor">;

const ModProfesorAusente = ({ route, navigation }: Props) => {
  const idRef = route.params.id;
  const docRef = doc(database, "prueba", idRef);
  const getDocbyId = getDoc(docRef).then((doc) => {
    console.log(doc.data());
  });
  const addToast = () => {
    Toast.show({
      title: "Profesor marcado",
    });
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(docRef, {
        ausente: false,
      });
      addToast();
      navigation.goBack();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Box safeArea alignSelf="center" flex="1">
      <Text mt="50%">
        ¿Desea marcar a {route.params.firstName} {route.params.lastName} como
        presente?
      </Text>
      <Button colorScheme="darkBlue" mt="10" onPress={handleUpdate}>
        Aceptar
      </Button>
    </Box>
  );
};

export default ModProfesorAusente;