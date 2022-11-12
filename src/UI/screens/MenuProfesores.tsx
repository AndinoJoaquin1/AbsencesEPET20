import React from "react";
import { FlatList, View } from "native-base";
import PressableProfesor from "../components/PressableProfesor";
import { collection, onSnapshot, orderBy, query} from "firebase/firestore";
import { database } from "../database/FirebaseConfig";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../nav/Navigation";

type Props = NativeStackScreenProps<RootStackParams,'MenuProfesores'>

const MenuProfesores = ({ navigation }: Props) => {

  const [profesores, setProfesores] = React.useState([] as any);
  
  const colletionRef = collection(database, 'prueba');
  
  const q = query(colletionRef, orderBy('lastName','desc'));
 
  const consultaDB = ()=> onSnapshot(q, querySnapshot => {
    setProfesores ( 
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        materia: doc.data().materia,
        curso: doc.data().curso
      }))
    );
  })

  React.useEffect(()=>{
    const fecthProfesores= async()=>{
      const data = await consultaDB();
    }
    fecthProfesores();
  }, [])

  return (
    <View flex="1">
      <FlatList
        data={profesores}
        keyExtractor ={(item) => item.id}
        renderItem={({ item }) => <PressableProfesor lastName={item.lastName} firstName={item.lastName} curso={item.curso} materia={item.materia} id={item.id} onPress={id=>{navigation.navigate('ModProfesor',{id})}} />}
      />
    </View>
  );
};

export default MenuProfesores;
