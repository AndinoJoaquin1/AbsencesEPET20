import React, { useState } from "react";
import { Box, Button, Center, Input, Select, Toast } from "native-base";
import { database } from "../database/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import addToast from "../components/Toast";

type PropsNavigation = NativeStackScreenProps<
  RootStackParams,
  "FormProfesores"
>;

// Componente de formulario de carga de profesores
export default function FormProfesores({ navigation }: PropsNavigation) {
  const [buttonState, setButtonState] = useState(false);

  const [newProfesor, setNewProfesor] = React.useState({
    firstName: "",
    lastName: "",
    materia: "",
    curso: "",
    ausente: false,
  });

  const Send = async () => {
    try {
      setButtonState(true);
      await addDoc(collection(database, "prueba"), newProfesor);
      addToast("Profesor Agregado");
      navigation.popToTop();
    } catch (e) {
        addToast(e.message);
        setButtonState(false);
    }
  };

  return (
    <Center safeArea>
      <Box mt="25%" w="90%">
        <Input
          placeholder="Nombre"
          onChangeText={(value) =>
            setNewProfesor({ ...newProfesor, firstName: value })
          }
        />
        <Input
          placeholder="Apellido"
          onChangeText={(value) =>
            setNewProfesor({ ...newProfesor, lastName: value })
          }
          mt="5"
        />
        <Input
          placeholder="Materia"
          onChangeText={(value) =>
            setNewProfesor({ ...newProfesor, materia: value })
          }
          mt="5"
        />
        <Select
          mt="5"
          onValueChange={(itemValue) =>
            setNewProfesor({ ...newProfesor, curso: itemValue })
          }
          placeholder="Curso"
        >
          <Select.Item label="1ro 1ra" value="1ro 1ra" />
          <Select.Item label="1ro 1da" value="1ro 2da" />
          <Select.Item label="1ro 1ra" value="1ro 3ra" />
          <Select.Item label="1ro 1ta" value="1ro 4ta" />
        </Select>
        <Button onPress={Send} colorScheme="darkBlue" mt="10" isDisabled={buttonState}>
          Agregar
        </Button>
      </Box>
    </Center>
  );
}
