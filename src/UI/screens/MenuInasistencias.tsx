import React from 'react';
import {View,Button,StyleSheet} from 'react-native';
import {PropsNavigation} from '../interfaces/interfaces';

//menu de seleccionamiento de profesor para marcar la inasistencia

export default function MenuInasistencias({navigation}:PropsNavigation) {
    return(
        <View style={styles.container}>
            <Button 
            title="Back"
            onPress={() => navigation.goBack()}/>

            <Button 
            title="Profe1"
            onPress={() => navigation.goBack()}/>

            <Button 
            title="Profe2"
            onPress={() => navigation.goBack()}/>


            <Button 
            title="Profe3"
            onPress={() => navigation.goBack()}/>


            <Button
            title="Profe4"
            onPress={() => navigation.goBack()}/>

            
            <Button 
            title="Profe5"
            onPress={() => navigation.goBack()}/>

            </View>
    );
    
 } 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
     });