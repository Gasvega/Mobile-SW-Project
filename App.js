import React, { useState, useEffect } from 'react';
import { StyleSheet,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Drawer from "./component/Drawer"
import { firebase } from './firebaseConfig';
export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
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
