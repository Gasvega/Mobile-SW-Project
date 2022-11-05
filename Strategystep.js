

import * as React from 'react';
import { View, StyleSheet} from 'react-native';

import TabviewControl from './Tabviewcontrol'
import Headerbar from './Headerbar'
export default function Strategystep(props) {
   

   
    return (

        <View style={styles.container}>
                   <Headerbar quiztext = {props.route.params.paramtext}></Headerbar>

                     <TabviewControl propsdata = {props}> </TabviewControl>
        </View>
     
     
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
  
  
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
