import {
  collection,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  View,
  Select,
  Input,
  CheckIcon,
  Modal,
  Toast,
} from "native-base";
import React, { useState } from "react";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import DateTimePicker from "react-native-modal-datetime-picker";


type Props = NativeStackScreenProps<RootStackParams,"ModProfesor">;

const ModProfesor = ({ route, navigation }: Props) => {
  const idRef = route.params.id;
  const docRef = doc(database, "prueba", idRef);
  const getDocbyId = getDoc(docRef).then((doc) => {
    console.log(doc.data());
  });
  const addToast=()=> {
    Toast.show({
     title: "Profesor Marcado"
   });
 }

  const handleUpdate = async () => {
    try {
      await updateDoc(docRef, {
        ausente: true,
      });
      addToast()
      navigation.goBack()
    } catch (e) {
      alert(e.message);
    }
   };


  return (
    <Box safeArea alignSelf="center" flex="1">
      <Text mt="50%">
        ¿Desea marcar a {route.params.firstName} {route.params.lastName} como
        ausente?
      </Text>
      <Button colorScheme="darkBlue" mt="10"
      onPress={handleUpdate}
      >
        Aceptar</Button>
        
    </Box>
  );
};

export default ModProfesor;
