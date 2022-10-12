import React from "react";
import { FlatList, View } from "native-base";
import { PropsNavigation } from "../interfaces/interfaces";
import PressableProfesor from "../components/PressableProfesor";


const MenuProfesores = ({ navigation }: PropsNavigation) => {
    const data = [
      {
        id: "1",
        nombre: "Juan",
        apellido: "Perez",
        curso: "6to 1ra",
        materia: "Seguridad Informatica",
      }
    ];
  return (
    <View flex="1">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PressableProfesor apellido={item.apellido} nombre={item.nombre} curso={item.curso} materia={item.materia}/>}
      />
    </View>
  );
};

export default MenuProfesores;
