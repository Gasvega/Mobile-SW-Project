

import * as React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback,Keyboard ,Platform,Text,KeyboardAvoidingView} from 'react-native';
import TabviewControl from './Tabviewcontrol'
import Headerbar from './Headerbar'


export default function Strategystep(props) {
   
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    
 
         <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      
           <Headerbar quiztext = {props.route.params.paramtext}></Headerbar>
          
           </KeyboardAvoidingView>
           <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
           <TabviewControl propsdata = {props}> </TabviewControl>
           </KeyboardAvoidingView>
          
          
           
           </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      
      textAlign: 'center',
     
    },
    test: {
      
      backgroundColor: '#fff',
      
      textAlign: 'center',
     
    },
   
    buttonstyle:
    {
        margin:8,
        borderWidth: 3,
        borderRadius: 15,
        borderColor:'blue',
       
        height:60,
        width:330,
        justifyContent: 'center',
        textAlign: 'center',
    },
    textstyle:{
        margin : 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
   
    text1: {
      lineHeight:30,
      width:300,
      padding:10,
      backgroundColor:'#E4F7BA',

      borderColor:'blue',
      borderRadius: 10,
      borderWidth: 1
  
    },
});
