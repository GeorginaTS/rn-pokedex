import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from './src/context/Context';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  
  return (
    <ContextProvider>
    <NavigationContainer>
        <AppNavigator />
     </NavigationContainer>
    </ContextProvider>
  );
}