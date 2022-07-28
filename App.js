import { StyleSheet, View, StatusBar } from 'react-native'
import FormUser from './src/UI/components/FormUser';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <FormUser/>
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