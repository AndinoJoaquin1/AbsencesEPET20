import { StyleSheet, View, StatusBar } from 'react-native'
import ModConfimracion from './src/UI/components/ModConfirmacion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <ModConfimracion/>
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