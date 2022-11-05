import { useState, useEffect } from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';


export default function Button(props) {


  const textcheak = () =>{

    
    if(props.data == 0)
    {
      if(props.buttontext != "Next Step")
      {
        props.setmessage("🎉🎈 Congratulations")
      props.setbuttontext("Next Step")
    
      }
      else{
       
          props.setidx(1)
          
      }
    
  
  }
  if(props.data == 1)
  {
    if(props.buttontext != "Next Step")
    {
    props.setmessage("🎉🎈 Congratulations")
    props.setbuttontext("Next Step")
    
    }
    else {
        props.setidx(2)
    }
  

}
if(props.data == 2)
{
  if(props.buttontext != "Next Step")
  {
    props.setmessage("🎉🎈 Congratulations")
  props.setbuttontext("Next Step")
  
  }
  else {
      props.setidx(3)
  }


}
if(props.data == 3)
{
  if(props.buttontext != "Next Step")
  {
    props.setmessage("🎉🎈 Congratulations")
  props.setbuttontext("Next Strategy")
  
  }
  else  {
   
      
  }


}


  }
    return (
    
        <TouchableOpacity style = {styles.buttonstyle } 
        onPress = {()=>
          textcheak()
       }>
     
        <Text style = {styles.textstyle} >{props.buttontext}</Text>
        </TouchableOpacity>
      );
}
const styles = StyleSheet.create({
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
    }
   
  });