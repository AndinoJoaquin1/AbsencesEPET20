import { StyleSheet, View, StatusBar } from 'react-native'
import InstConfirmacion from './src/UI/components/InstConfirmacion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <InstConfirmacion/>
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