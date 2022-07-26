import React from "react";
import {View,TextInput,Button,StyleSheet} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

// Componente de formulario de carga de profesores
export default function FormProfesores ({navigation}){
    const Cursos=["6to 3era","6to 2da","6to 1ra"];
    const Materias=["Etica y Deontologia","Redes II","Programacion Web Dinamica"];
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack(null)}>
            </Button>
            <Button title="Home"
            onPress={() => navigation.navigate('MainMenu')}>
            </Button>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});