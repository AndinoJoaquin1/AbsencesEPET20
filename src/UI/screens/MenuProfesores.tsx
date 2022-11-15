import React from "react";
import { Center, FlatList, Input, Spinner, View } from "native-base";
import PressableProfesor from "../components/PressableProfesor";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";
import {
  getMoreProfesores,
  getProfesores,
} from "../hooks/useFirebaseFunctions";

type PropsNavigation = NativeStackScreenProps<
  RootStackParams,
  "MenuProfesores"
>;

const MenuProfesores = ({ navigation }: PropsNavigation) => {
  const [profesores, setProfesores] = React.useState(new Array());
  const [lastDoc, setLastDoc] = React.useState(Object);
  const [lastDocIsLoad, setLastDocIsLoad] = React.useState(false);

  const consulta = async () => {
    const getData = await getProfesores();
    setProfesores([...profesores, ...getData.profesores]);
    setLastDoc(getData.lastVisible);
    console.log(lastDoc);
  };

  const moreData = async () => {
    if (!lastDocIsLoad) {
      const getData = await getMoreProfesores(lastDoc);
      setProfesores([...profesores, ...getData.profesores]);
      setLastDoc(getData.lastVisible);
      getData.profesores.length == 0
        ? setLastDocIsLoad(true)
        : setLastDocIsLoad(false);
    }
  };

  React.useEffect(() => {
    consulta();
  }, []);

  return (
    <Center flex="1">
      <Input
        placeholder="Filtar por Nombre"
        size="md"
        w="90%"
        mt="1"
        shadow="1"
      />

      <FlatList
        w="full"
        onEndReached={moreData}
        ListFooterComponent={!lastDocIsLoad && <Spinner mt="1" size="lg" />}
        data={profesores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PressableProfesor
            lastName={item.lastName}
            firstName={item.firstName}
            curso={item.curso}
            materia={item.materia}
            id={item.id}
            onPress={(id, lastName, firstName) => {
              navigation.navigate("ModProfesor", {
                id,
                lastName,
                firstName,
              });
            }}
          />
        )}
      />
    </Center>
  );
};

export default MenuProfesores;
