import React from "react";
import {View,TextInput,Button,StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {PropsNavigation} from '../interfaces/interfaces';

//componente de formulario de carga de cursos
export default function FormCurso ({navigation}:PropsNavigation){
    const  Turno=["Mañana","Tarde","Vespertino"];
    const Año=["Primero","Segundo","Tercero"];
    const Division=[ "Primera" , "Segunda", "Tercera"];
    return(
            <View style={styles.container}>
                <Button title="Back"
                onPress={() => navigation.goBack()}/>
                <Button title="Home"
                onPress={() => navigation.navigate('MainMenu')}/>
                
                <SelectDropdown
                data={Turno}
                onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
                buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
                defaultButtonText="Ingrese el turno"
                />
                
                <SelectDropdown
                data={Año}
                onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
                buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
                defaultButtonText="Ingrese el año"
                />

                   <SelectDropdown
                data={Division}
                onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
                buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
                defaultButtonText="Ingrese  la Division"
                />
                <Button title="Agregar Curso"
                onPress={() => navigation.navigate('AltaRealizado')}/>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});