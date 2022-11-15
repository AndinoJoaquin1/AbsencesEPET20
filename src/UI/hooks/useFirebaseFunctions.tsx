import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { database } from "../database/FirebaseConfig";

export const getProfesores = async () => {
  const profesores = new Array();
  const q = query(
    collection(database, "prueba"),
    orderBy("lastName"),
    where("ausente", "==", true),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    let profData = doc.data();
    profData.id = doc.id;
    profesores.push(profData);
    console.log(profesores);
  });
  return { profesores, lastVisible };
};

export const getMoreProfesores = async (lastDoc) => {
  const profesores = new Array();
  const q = query(
    collection(database, "prueba"),
    orderBy("lastName"),
    startAfter(lastDoc),
    where("ausente", "==", false),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    let profData = doc.data();
    profData.id = doc.id;
    profesores.push(profData);
    console.log(profesores);
  });
  return { profesores, lastVisible };
};

export const getProfesoresAusentes = async () => {
  const profesores = new Array();
  const q = query(
    collection(database, "prueba"),
    orderBy("lastName"),
    where("ausente", "==", true),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    let profData = doc.data();
    profData.id = doc.id;
    profesores.push(profData);
    console.log(profesores);
  });
  return { profesores, lastVisible };
};

export const getMoreProfesoresAusentes = async (lastDoc) => {
  const profesores = new Array();
  const q = query(
    collection(database, "prueba"),
    orderBy("lastName"),
    startAfter(lastDoc),
    where("ausente", "==", true),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  querySnapshot.forEach((doc) => {
    let profData = doc.data();
    profData.id = doc.id;
    profesores.push(profData);
    console.log(profesores);
  });
  return { profesores, lastVisible };
};
