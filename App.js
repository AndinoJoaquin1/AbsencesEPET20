import { StyleSheet, View, StatusBar } from 'react-native'
import InstRealizado from './src/UI/components/InstRealizado';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <InstRealizado/>
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