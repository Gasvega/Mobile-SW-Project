import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import NoSeven from './Question/Q7';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name = "Q7." component = {NoSeven}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}