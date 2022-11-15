import React from 'react';
import { View, Button, Center, Box, Spinner } from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../nav/Navigation';
import PressableProfesor from '../components/PressableProfesor';
import { FlatList } from 'native-base';
import { getMoreProfesoresAusentes } from '../hooks/useFirebaseFunctions';
import { getProfesoresAusentes } from './../hooks/useFirebaseFunctions';


type PropsNavigation = NativeStackScreenProps<
  RootStackParams,
  "MenuInasistencias"
>;

export default function MenuInasistencias({ navigation }: PropsNavigation) {
  const [profesores, setProfesores] = React.useState(new Array());
        const [lastDoc, setLastDoc] = React.useState(Object);
        const [lastDocIsLoad, setLastDocIsLoad] = React.useState(false);
  const consulta = async () => {
    const getData = await getProfesoresAusentes();
        setProfesores([...profesores, ...getData.profesores]);
        setLastDoc(getData.lastVisible);
        console.log(lastDoc);
  };

  const moreData = async () => {
    if (!lastDocIsLoad) {
      const getData = await getMoreProfesoresAusentes(lastDoc);
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

}
