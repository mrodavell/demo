import { View } from 'react-native'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/pages/Profile';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Profile />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


