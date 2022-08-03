import React from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';


//menu de seleccionamiento de profesor para marcar la inasistencia

export default function MenuInasistencias(){
    return(
        <View style={styles.container}>
            <Button title="Back"
            onPress={() => navigation.goBack(null)}>
            </Button>


            </View>
    );
