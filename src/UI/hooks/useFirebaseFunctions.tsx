import { collection, getDocs, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../database/FirebaseConfig";

export const getProfesores = async() =>{
    const profesores = new Array();
    const colletionRef = collection(database, 'prueba');
    const q = await getDocs(colletionRef,orderBy('lastName'),limit(10));
    q.forEach((doc)=>{
        let profData = doc.data();
        profData.id= doc.id;
        profesores.push(profData);
        console.log(profesores);
    });
    return {profesores};
}