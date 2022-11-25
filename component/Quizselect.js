
import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function Quizselect(props) {
    
    return (

        <View style={styles.container}>
       

          
            <TouchableOpacity 
            style = {styles.buttonstyle}
            onPress={() => props.navigation.navigate("quizopen",{num:3 , text:"Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?"})}
            >
                <Text style={styles.textstyle} >Quiz 3</Text>

             
                
            </TouchableOpacity>
            <TouchableOpacity 
            style = {styles.buttonstyle}
            onPress={() => props.navigation.navigate("quizopen",{num:4,text:"Elena, Karla, and Faye are playing a card game where they score points. Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. The sum of their three scores is 114. Who scores more points, Karla or Faye?"})}
            >
                <Text style={styles.textstyle} >Quiz 4</Text>
            </TouchableOpacity>



        </View>
      
     
     
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
    }
});
