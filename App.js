
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Quizselect from './component/Quizselect';
import Quizopen from './component/Quizopen';
import Strategy from './component/Strategy';
import Strategystep from './component/Strategystep';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
   
    
      <Stack.Screen name = "quizselect" component = {Quizselect}
      options = {{title:'Choose a Quiz',
      headerStyle:{
      backgroundColor:'pink'      }}}/>
      <Stack.Screen name = "quizopen" component = {Quizopen}
      options = {{title:'Open-ended question',
      headerStyle:{
      backgroundColor:'pink'      }}}/>
       <Stack.Screen name = "strategy" component = {Strategy}
      options = {{title:'Choose your strategy',
      headerStyle:{
      backgroundColor:'pink'      }}}/>
       <Stack.Screen name = "strategystep" component = {Strategystep}
      options = {{title:'Choose your strategy',
      headerStyle:{
      backgroundColor:'pink'      }}}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  text1: {
    lineHeight:'30px',
    width:300, 
    backgroundColor:'#f0f8ff',
    border: '1px solid blue',

    

  },
});
