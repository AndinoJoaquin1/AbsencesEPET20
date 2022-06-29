import { StyleSheet, View, StatusBar } from 'react-native'
import ConsultaProfesores from './src/UI/components/ConsultaProfesores';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <ConsultaProfesores></ConsultaProfesores>
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
