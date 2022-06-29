import React from "react";
import {View,TextInput,Button} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
export default function FormProfesores (){
    const Cursos=["6to 3era","6to 2da","6to 1ra"];
    const Materias=["Etica y Deontologia","Redes II","Programacion Web Dinamica"];
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <TextInput placeholder="Nombre" maxLength={25}/>
            <TextInput placeholder="Apellido" maxLength={25}/>
            <TextInput placeholder="D.N.I." maxLength={8}/>
            <TextInput placeholder="N° de Telefono" maxLength={13}/>
            <SelectDropdown
            data={Cursos}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese el curso"
            />
            <SelectDropdown
            data={Materias}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese la materia"
            />
            <Button title="Agregar Profesor"></Button>
        </View>
    );
}