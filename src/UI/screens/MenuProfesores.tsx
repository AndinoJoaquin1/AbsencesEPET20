import React from "react";
import { FlatList, View } from "native-base";
import {PropsNavigation} from '../interfaces/interfaces';
import PressableProfesor from '../components/PressableProfesor';

const MenuProfesores = ({navigation}:PropsNavigation) => {
    const data =[{
        id: "1",
        name:"Nombre Apellido",
        curso:"Curso",
        materia:"Materia"
    }]
    return (
        <View flex="1">
            <FlatList
                 data={data}
                 keyExtractor={item=>item.id}
                 renderItem={({})=>(<PressableProfesor/>)}
            />
        </View>
    )
}

export default MenuProfesores;