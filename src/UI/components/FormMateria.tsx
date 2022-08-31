import React from "react";
import {View,TextInput,Button,StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {PropsNavigation} from '../interfaces/interfaces';



// Componente de formulario de carga de Materias



export default function FormMateria ({navigation}:PropsNavigation){

    const Turno=["Vespertino","Mañana","Tarde"];
    const Division=[6,2,1];
    const Anio=[6,2,1];

    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack()}/>
            <Button title="Home"
            onPress={() => navigation.navigate('MainMenu')}/>


            <TextInput placeholder="Ingrese nombre" maxLength={25}/>

            <SelectDropdown
            data={Anio}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese el año"
            />
            
            <SelectDropdown
            data={Division}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese la division"
            />

            <SelectDropdown
            data={Turno}
            onSelect={(selectedItem, index)=>console.log(selectedItem,index)}
            buttonTextAfterSelection={(selectedItem,index)=>{return selectedItem}}
            defaultButtonText="Ingrese el turno"
            />


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