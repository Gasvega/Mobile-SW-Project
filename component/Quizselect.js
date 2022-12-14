
import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,ScrollView} from 'react-native';

import { createDrawerNavigator } from "@react-navigation/drawer";
export default function Quizselect(props) {
    
    return (
        
        <View style={{backgroundColor: '#fff'}}>
            <ScrollView>
            <View style={styles.container}>
            
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:1, text:"Todd orders pictures from a photographer. Each picture costs $7.50. A one-time shipping fee of $3.25 is added to the cost of the order. The total cost of Todd’s order before tax is $85.75. How many pictures did Todd order?"})}
            >
             <Text style={styles.textstyle} >Quiz 1</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:2,text:"Jen wants to run a total of 22 miles in five days. The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. How many miles must Jen run on Friday to reach her goal?"})}
                >
               <Text style={styles.textstyle} >Quiz 2</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.container}>

            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:3, text:"Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?"})}
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

             <View style={styles.container}>

            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:3 , text:"Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?"})}
            >
             <Text style={styles.textstyle} >Quiz 5</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:4,text:"Elena, Karla, and Faye are playing a card game where they score points. Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. The sum of their three scores is 114. Who scores more points, Karla or Faye?"})}
                >
               <Text style={styles.textstyle} >Quiz 6</Text>
               </TouchableOpacity>
             </View>
        
        <View style={styles.container}>

            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:3 , text:"Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?"})}
            >
             <Text style={styles.textstyle} >Quiz 7</Text>

                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:4,text:"Elena, Karla, and Faye are playing a card game where they score points. Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. The sum of their three scores is 114. Who scores more points, Karla or Faye?"})}
                >
               <Text style={styles.textstyle} >Quiz 8</Text>
               </TouchableOpacity>
             </View>

             </ScrollView>


        </View>

     
     
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex:1,
      flexDirection: 'row',
      margin:20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',

    },
    buttonstyle:
    {
        margin:8,
        borderWidth: 3,
        borderRadius: 30,
        borderColor:'blue',
       
        height:110,
        width:120,
        justifyContent: 'center',
        textAlign: 'center',
       
    },
    textstyle:{
        fontSize:30,
        justifyContent: 'center',
        textAlign: 'center',
    }
});
