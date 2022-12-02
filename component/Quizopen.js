
import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useState } from 'react';
import Headerbar from './Headerbar'
import Txinput from './Txinput'
export default function Quizopen(props) {
  
    const [nextok, setnextok] = useState("Submit");
    const [nextstate, setnextstate] = useState(0);
    const [message,setmessage] = useState("");
    const [quiztext,setquiztext] = useState("");
   

    const nextstage = (props) => {
        if(nextstate==0)
        {
        setnextok("Next Stage")
        setnextstate(1)
        setmessage("😊 GOOD JAB 😊")
        return
        }
        else{
            props.navigation.navigate("strategy",props.route.params)
          
        }
    
        
    }

   
  
    return (
<TouchableWithoutFeedback onPress={() => {
       
        Keyboard.dismiss()
      }}>
        <View style={styles.container}>
         
         <Headerbar quiztext = {props.route.params.text}></Headerbar>
         
         <Text  style = {styles.textstyle}> What do you think the problem is asking you to do?
        </Text>
        < ScrollView>
        <Txinput></Txinput>
        <Text style = {styles.textstyle}>{message}</Text>
        <TouchableOpacity style ={styles.buttonstyle}
        onPress={() => nextstage( props)}
        >
            <Text style = {styles.textstyle}>{nextok}</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
        </TouchableWithoutFeedback>
     
     
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    buttonstyle:
    {
        margin:8,
        borderWidth: 3,
        borderRadius: 15,
        borderColor:'blue',
       
        height:30,
        width:300,
        justifyContent: 'center',
        textAlign: 'center',
       
    },
    textstyle:{
        justifyContent: 'center',
        textAlign: 'center',
   
    },
    textInput: {
        marginTop: 20,
        marginBottom: 10,
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
