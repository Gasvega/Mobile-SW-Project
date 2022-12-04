import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import Q7_A from './Question/Q7_A';
import Q7_B from './Question/Q7_B';
import Q7_C from './Question/Q7_C';
import Q7 from './Selecte/Q7_Selecte';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor = 'white'
        barStyle = 'dark-content'
      />
      <Stack.Navigator initialRouteName='Ragister'
      screenOptions = {{
        headerStyle:{
          backgroundColor: '#2F9D27'
        },
        headerTintColor: 'white',
        headerTitleStyle:{
          fontwweight: 'bold',
          color : 'white'
        }
      }}>
        <Stack.Screen  name = "Q7." component = {Q7}/> 
        <Stack.Screen  name = "Q7_A." component = {Q7_A}/>
        <Stack.Screen  name = "Q7_B." component = {Q7_B}/>
        <Stack.Screen  name = "Q7_C." component = {Q7_C}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}