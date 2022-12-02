import * as React from 'react';
import { View, StyleSheet,Text,KeyboardAvoidingView,Platform} from 'react-native';


export default function TextQ(props) {
    return (
  
      <View style = {styles.container}>
       <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <Text style = {styles.text1}>{props.quiztext}
        </Text>
        </KeyboardAvoidingView>
        </View>
      
       
    );
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      margin:20,
  
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

