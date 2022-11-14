import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/UI/nav/Navigation';
import { useWindowDimensions } from 'react-native';
import { authContext, AuthProvider } from './src/UI/context/AuthContext';
//Ejecucion de componentes y navegacion  entre  pantallas


export default function App() {
  const { height, width } = useWindowDimensions();
  return (
    <AuthProvider value={authContext}>

    <NativeBaseProvider width={{width}} height={{height}}>
      <Navigation/>
    </NativeBaseProvider>
    </AuthProvider>
    )
}



