import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/UI/nav/Navigation';
import { useWindowDimensions } from 'react-native';
//Ejecucion de componentes y navegacion  entre  pantallas


export default function App() {
  const { height, width } = useWindowDimensions();
  return (
    <NativeBaseProvider width={{width}} height={{height}}>
      <Navigation/>
    </NativeBaseProvider>
    )
}



