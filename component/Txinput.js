import * as React from 'react';
import {StyleSheet,TextInput,View,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';
export default function Txinput() {
    const [data, setdata] = useState("");
    const changedata = (event) => {
        setdata(event)
      }
       
    return (
      
          <TextInput
          style={styles.textInput}
           value = {data}
           onChangeText={changedata}
         
           
           //autoFocus={true}
           
         />
          
        

      );

}

const styles = StyleSheet.create({
   
  textInput: {
    margin: 10,
    height: 80,
    width:300,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
    
  },
   
  });