import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text } from 'react-native';
import  {db}  from './firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, 
  deleteDoc, where, query } from "firebase/firestore"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from './Compenent/signUp';
import signIn from './Compenent/singIn';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [addName, setAddName] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [addPasswordCheck, setAddPasswordCheck] = useState('');
  const [addAge, setAddAge] = useState('');
  const [addId, setId] = useState('');
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [users, setUsers] = useState();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor = 'white'
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
        <Stack.Screen name = "Sign In" component={signIn}
        options = {{title : 'Sing In'}}
        />
        <Stack.Screen name = "Sign Up" component={signUp}
        options = {{title : 'Sing Up'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  SubView : {
    flex : 1
  },
  MainView: {
    flex : 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  OutPut: {
    flex : 2,
    backgroundColor : "#D3FFFF",
    marginBottom : 1,
    marginTop : 50,
    width: "70%",
    marginLeft: 20,
    borderColor: "#D1B2FF",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  StepSort:{
  flex: 3,
  marginTop : 5,
  width: "90%",
  alignItems: 'center',
  },
  Step: {
    height : 48,
    marginBottom : 1,
    marginTop : 15,
    width: "120%",
    marginLeft: 60,
    flexDirection: 'row',
  },
  Step2: {
    marginBottom : 5,
    marginTop : 5,
    width: "20%",
    marginLeft: 20,
  },
  TextStyle: {
    marginLeft: 80,
    width: "40%",
    fontSize : 22,
    backgroundColor : "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "black",
    textcolor: "#BDBDBD",
  }
});
