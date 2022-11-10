import * as React from 'react';
import {StyleSheet,TextInput} from 'react-native';
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
           
         />

      );

}

const styles = StyleSheet.create({
   
  textInput: {
    margin: 15,

    paddingHorizontal: 10,
    height: 120,
    width:300,
   
    borderWidth: 3,
    borderRadius: 10,
  
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
    
  },
   
  });