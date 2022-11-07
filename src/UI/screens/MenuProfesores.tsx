import React from "react";
import { FlatList, View } from "native-base";
import { PropsNavigation } from "../interfaces/interfaces";
import PressableProfesor from "../components/PressableProfesor";
import { collection, onSnapshot, orderBy, query} from "firebase/firestore";
import { database } from "../database/FirebaseConfig";



const MenuProfesores = ({ navigation }: PropsNavigation) => {

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
        renderItem={({ item }) => <PressableProfesor lastName={item.lastName} firstName={item.lastName} curso={item.curso} materia={item.materia} id={item.id} navigation={navigation} route={undefined} />}
      />
    </View>
  );
};

export default MenuProfesores;
