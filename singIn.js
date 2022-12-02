import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import  {db}  from '../firebaseConfig';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query } from "firebase/firestore"; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const signIn = (props) => {
  const [addName, setAddName] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [addPasswordCheck, setAddPasswordCheck] = useState('');
  const [addAge, setAddAge] = useState('');
  const [addId, setId] = useState('');
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [users, setUsers] = useState();
  const Stack = createStackNavigator();

  const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", addId, password);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  const updateDB = async ()=>{
    try{
      const docRef = doc(db, "user", addId, password);
      await updateDoc(docRef, {
        addId: addId,
        addName: addName,
        addPassword: addPassword,
        addAge: addAge,
        addPasswordCheck: addPasswordCheck
      });
      alert("Updated!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

 /* const queryDB = async ()=>{
    try{
      const q = await query(collection(db, "user" ), where('addName',"==","test23"))
      const singleDoc = await getDocs(q);
      console.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }*/

  const readfromDB = async ()=>{
    try{
      const data = await getDocs(collection(db, "user" ))
      setUsers(data.docs.map(doc => ({ ...doc.data(), addId: doc.addId })));
    }catch(error){
      console.log(error.message)
    }
  }

  const addtoDB = async ()=>{
    try{
      await addDoc(collection(db, "user" ), {
        addId: addId,
        addName: addName,
        addPassword: addPassword,
        addPasswordCheck: addPasswordCheck,
        addAge: addAge,
        createdAt: new Date(),
      });
      alert("Added!!")
      setAddName("")
      setAddPassword("")
      setAddAge("")
    }catch(error){
      console.log(error.message)
    }
  }
  return (
          <View style = {styles.MainView}>
            <View style = {styles.OutPut}>
            </View>
            <View style = {styles.SubView}>
            </View>
            {users?.map((row, idx) => {
              return (
              <>
                <Text>User- {idx}</Text>
                <Text>{row.addId}</Text>
                <Text>{row.addPassword}</Text>
                <Text>{row.addName}</Text>
                <Text>{row.addAge}</Text>
              </>
              );
          })}
          <View style = {styles.StepSort}>
            <View style = {styles.Step}>
              <TextInput style = {styles.TextStyle}
                placeholder="  ID"
                value={addId}
                onChangeText={setId}
              />
            </View>
            <View style = {styles.Step}>
              <TextInput style = {styles.TextStyle}
                placeholder="  password"
                value={addPassword}
                onChangeText={setAddPassword}
              />
            </View>
            <View style = {styles.Step2}>
             <Button title="sign In" onPress={addtoDB}/>        
            </View>
            <View style = {styles.Step2}>
             <Button title="sign up" onPress={() => {
                props.navigation.navigate("Sign Up")
             }}/>        
            </View>
            </View>
            <View style = {styles.SubView}>
            </View>
          </View>
  );
}

export default signIn;

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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
