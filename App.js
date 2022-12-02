
import * as React from 'react';
import { StyleSheet,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from "./component/Drawer"
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    
    <NavigationContainer>
      
      <StatusBar backgroundColor=''/>
      <Drawer></Drawer>
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
    

  },
  settingstyle: {
    width: 120,
    height: 30,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'blac',
  }
});
