import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/pages/Login';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, height: '100%'}}>
          <Login />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}


