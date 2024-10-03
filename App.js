import Profile from './src/pages/Profile';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


