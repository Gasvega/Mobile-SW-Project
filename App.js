import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet,Text } from 'react-native';
import  {db}  from './firebaseConfig';

import { useEffect } from 'react';
//const quiz1 = firestore.collection("Quiz");

import Modall from "./Modall";


import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 
export default function App() {

  // useEffect1(() => {
  //   // bucket이라는 변수로 firestore의 collection인 bucket에 접근
  //   const Quiz = db.collection("Quiz1_A-1");

  //   // bucket 콜렉션의 info 문서에 {name: 'duck';, height: 180} 데이터 추가.
  //   // 새로 만들거나 덮어쓰기
  //   Quiz.doc("info").set({ name: 'duck', height: 180 });
  // });
 
  


  const [addName, setAddName] = useState('');
  const [addAge, setAddAge] = useState('');
  const [id, setID] = useState('');
  const [users, setUsers] = useState();

  const [sum, setsum] = useState('');
  const [TestNum, setTestNum] = useState('');
  const [num, setNum] = useState();

  const useEffect = async () => {
    // Quiz라는 변수로 firestore의 컬렉션 Quiz에 접근
    const Quiz = db.collection("Quiz");

    // 모든 document 가져오기
    Quiz.get().then((docs) => {
      // 반복문으로 docuemnt 하나씩 확인
      docs.forEach((doc) => { 
        if(doc.exists){
          // document의 데이터
          console.log(doc.data());
          // document의 id
          console.log(doc.id);
        }
      });
    })
  };


  const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

  const updateDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await updateDoc(docRef, {
        addName: addName,
        addAge: addAge
      });
      alert("Update Your information")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }

/*  data class UserDTO(var name:String? =null, var address :String?=null)
  private fun createData(){
    var userDTO= UserDTO("범석","서울")
    firestore?.collection("User")?.document("document1")?.set(userDTO)
        .addOnCompleteListener {
            if(it.isSuccessful)
                toast("create성공")
        }
}
  const qdb = async () => {
    collection(Collection ).document(Document quiz1).set(11)
    .addOnCompleteListener{ task ->
    }
  }*/
  //}
  const queryDB = async ()=>{
    try{
      const q = await query(collection(db, "user" ), where('addName',"==","test23"))
      const singleDoc = await getDocs(q);
      console.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  const readfromDB = async ()=>{
    try{
      const data = await getDocs(collection(db, "user" ))
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }catch(error){
      console.log(error.message)
    }
  }

  const deletefromDB1 = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }
  const updateDB1 = async ()=>{
    try{
      const docRef = doc(db, "Quiz", num);
      await updateDoc(docRef, {
        addQuiz: addQuiz,
        EnterAnswer: EnterAnswer
      });
      alert("Update Quiz Information")
      readfromDB1()
    }catch(error){
      console.log(error.message)
    }
  }
  const readfromDB1 = async ()=>{
    try{
      const data = await getDocs(collection(db, "Quiz" ))
      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }catch(error){
      console.log(error.message)
    }
  }
  const queryDB1 = async ()=>{
    try{
      const q = await query(collection(db, "Quiz" ), where('Quiz1_A-1',"==","Answer1"))
      const singleDoc = await getDocs(q);
      console.log(singleDoc)
    }catch(error){
      console.log(error.message)
    }
  }

  const addtoDB = async ()=>{
    try{
      await addDoc(collection(db, "user" ), {
        addName: addName,
        addAge: addAge,
        createdAt: new Date(),
      });
      alert("Added Your Information")
      setAddName("")
      setAddAge("")
    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <View>
      <TextInput
        placeholder="name"
        value={addName}
        onChangeText={setAddName}
      />
      <TextInput
        placeholder="age"
        value={addAge}
        onChangeText={setAddAge}
      />
      <Button /*{style.styles},*/ title="Add Text" onPress={addtoDB} />
      <Button title="Read Text" onPress={readfromDB1} />
      {/* {users?.map((row, idx) => {
        return (
          <>
            <Text>User- {idx}</Text>
            <Text>{row.id}</Text>
            <Text>{row.addName}</Text>
            <Text>{row.addAge}</Text>
          </>
        );
      })} */}
      {users?.map((row, idx) => {
        return (
          <>
            <Text>Quiz- {idx}</Text>
            <Text>{row.id}</Text>
            <Text>{row.addQuizNum}</Text>
            <Text>{row.addQuiz}</Text>
          </>
        );
      })}
<Button title="Update Text DB" onPress={updateDB1} />
      <TextInput
        placeholder="Update Answer Num"
        value={num}
        onChangeText={setNum}
      />
      <TextInput
        placeholder="name"
        value={addName}
        onChangeText={setAddName}
      />
      <TextInput
        placeholder="age"
        value={addAge}
        onChangeText={setAddAge}
      />
      <Button title="Delete DB" onPress={deletefromDB1} />
      <TextInput
        placeholder="Delete ID"
        value={id}
        onChangeText={setID}
      />
      {/* <Button title="Update Text DB" onPress={updateDB1} />
      <TextInput
        placeholder="Update Answer Num"
        value={num}
        onChangeText={setNum}
      />
      <TextInput
        placeholder="name"
        value={addName}
        onChangeText={setAddName}
      />
      <TextInput
        placeholder="age"
        value={addAge}
        onChangeText={setAddAge}
      />
      <Button title="Delete Text" onPress={deletefromDB} />
      <TextInput
        placeholder="Delete ID"
        value={id}
        onChangeText={setID}
      /> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    //backgroundImage ,
    alignItems: 'center',
    justifyContent: 'center',
    height: 10,
    width: 30,
    borderRadius: 15,
  },

  // Text1: {
  //   flex:1,
  //   backgroundColor: "red",
  //   borderRadius: 15,


  // }
});