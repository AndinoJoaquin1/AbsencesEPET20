import { StyleSheet, View, StatusBar } from 'react-native';
import AltaRealizado from './src/UI/components/AltaRealizado';

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
});