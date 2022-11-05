
import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import Headerbar from './Headerbar'
import { useState, useEffect } from 'react';
export default function Strategy(props) {

    const [strategytext1,setstrategytext1] = useState("")
    const [strategytext2,setstrategytext2] = useState("")
    const [strategytext3,setstrategytext3] = useState("")

    if(props.route.params.num == 3)
    {
        useEffect(() => {
        setstrategytext1("Subtract the extra yards and then figure out how much fabric she used for each curtain")
        setstrategytext2("Write an equation to solve it")
        setstrategytext3("Use a diagram to try and understand the problem")
    });
    }
    else if(props.route.params.num == 4)
    {
        useEffect(() => {
        setstrategytext1("Guess the number of points and see if it works")
        setstrategytext2("Write equations to solve the problem")
        setstrategytext3("Use a diagram to try and understand the problem")
    });
    }
    return (

        <View style={styles.container}>
             <Headerbar quiztext = {props.route.params.text}></Headerbar>
         <Text style = {styles.textstyle}>❓ Which strategy do you want to try?

</Text>
<TouchableOpacity style ={styles.buttonstyle}
onPress = {() =>     props.navigation.navigate("strategystep",{paramtext:props.route.params.text,paramnum:props.route.params.num,step:'A'})}
>
    <Text style = {styles.textstyle}>{strategytext1}
</Text>
</TouchableOpacity>

<TouchableOpacity style ={styles.buttonstyle}
onPress = {() =>     props.navigation.navigate("strategystep",{paramtext:props.route.params.text,paramnum:props.route.params.num,step:'B'})}

>
    <Text style = {styles.textstyle}>{strategytext2}
</Text>
</TouchableOpacity>

<TouchableOpacity style ={styles.buttonstyle}
onPress = {() =>     props.navigation.navigate("strategystep",{paramtext:props.route.params.text,paramnum:props.route.params.num,step:'C'})}
>
    <Text style = {styles.textstyle}>{strategytext3}
</Text>
</TouchableOpacity>

        </View>
     
     
    );
  }


  const styles = StyleSheet.create({
    container: {
    
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
       
        height:60,
        width:330,
        justifyContent: 'center',
        textAlign: 'center',
    },
    textstyle:{
        margin : 10,
        justifyContent: 'center',
        textAlign: 'center',
    }
});
