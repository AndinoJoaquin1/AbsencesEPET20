import React from "react";
import {View,TextInput,Button} from "react-native"

export default function FormProfesores (){
    return(
        <View>
            <Button title="Back"></Button>
            <Button title="Home"></Button>
            <TextInput placeholder="Nombre" maxLength={25}/>
            <TextInput placeholder="Apellido" maxLength={25}/>
            <TextInput placeholder="D.N.I." maxLength={8}/>
            <TextInput placeholder="N° de Telefono" maxLength={13}/>
            <Button title="Agregar Profesor"></Button>
        </View>
    )
}