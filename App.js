import { StyleSheet, View, StatusBar } from 'react-native'
import AltaConfimracion from './src/UI/components/AltaConfirmacion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <AltaConfimracion></AltaConfimracion>
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
