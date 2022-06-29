import { StyleSheet, View, StatusBar } from 'react-native';
import FormProfesores from './src/UI/FormProfesores';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <FormProfesores/>
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
