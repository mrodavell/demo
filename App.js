import Login from './src/pages/Login';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1}}>
          <Login />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}


