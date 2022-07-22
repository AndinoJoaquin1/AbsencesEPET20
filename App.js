import { StyleSheet, View, StatusBar } from 'react-native';
import AltaRealizado from './src/UI/components/AltaRealizado';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
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