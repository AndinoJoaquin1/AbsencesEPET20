import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { database } from "../database/FirebaseConfig";

export const getProfesores = async () => {
  const profesores = new Array();
  const q = query(
    collection(database, "prueba"),
    orderBy("lastName"),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let profData = doc.data();
    profData.id = doc.id;
    profesores.push(profData);
    console.log(profesores);
  });
  return { profesores };
};
