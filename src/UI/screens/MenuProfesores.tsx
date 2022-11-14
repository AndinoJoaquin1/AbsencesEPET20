import React from "react";
import { FlatList, View } from "native-base";
import PressableProfesor from "../components/PressableProfesor";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import { getProfesores } from "../hooks/useFirebaseFunction";

type PropsNavigation = NativeStackScreenProps<
  RootStackParams,
  "MenuProfesores"
>;

const MenuProfesores = ({ navigation }: PropsNavigation) => {
  const [profesores, setProfesores] = React.useState(new Array());

  const consultaDB = async () => {
    const getData = await getProfesores();
    setProfesores(getData.profesores);
  };

  React.useEffect(() => {
    consultaDB();
  }, []);

  return (
    <View flex="1">
      <FlatList
        data={profesores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableProfesor
            lastName={item.lastName}
            firstName={item.lastName}
            curso={item.curso}
            materia={item.materia}
            id={item.id}
            onPress={(id, lastName, firstName) => {
              navigation.navigate("ModProfesor", { id, lastName, firstName });
            }}
          />
        )}
      />
    </View>
  );
};

export default MenuProfesores;
