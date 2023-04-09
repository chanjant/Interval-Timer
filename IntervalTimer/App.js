import { SafeAreaView, StyleSheet} from 'react-native';
import {AppContextProvider}  from './frontend/AppContextProvider';
import Launch from './frontend/Launch';
import Timer from './frontend/Timer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Launch" component={Launch}/>
            <Stack.Screen name="Timer" component={Timer}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppContextProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});