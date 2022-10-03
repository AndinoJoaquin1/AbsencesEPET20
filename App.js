import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/UI/nav/Navigation';


//Ejecucion de componentes y navegacion  entre  pantallas


export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation/>
    </NativeBaseProvider>
  );
}



