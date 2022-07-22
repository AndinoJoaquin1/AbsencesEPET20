import { StyleSheet, View, StatusBar } from 'react-native';
import AltaRealizado from './src/UI/components/AltaRealizado';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}


function LoginFom() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LoginFom</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={LoginFom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}








export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <AltaRealizado/>
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
});S