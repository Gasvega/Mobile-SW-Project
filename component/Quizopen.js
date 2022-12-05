import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,ScrollView,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native';
import { useState } from 'react';
export default function Quizopen(props) {
  
    const [nextok, setnextok] = useState("Submit");  
    const [nextstate, setnextstate] = useState(0);
    const [message,setmessage] = useState("");

    {/* 텍스트 인풋 */} 
    const [data, setdata] = useState("");
    const changedata = (event) => {
        setdata(event)
      }
    const nextstage = (props) => {
       {/* 버튼을 누른 상태가 아니라면 */} 
        if(nextstate==0)
        {
       {/* 버튼 명을 바꾼다. */} 
        setnextok("Next Stage")
       {/* 버튼 누른 상태로 설정한다. */} 
        setnextstate(1)
       {/* 버튼 누른 상태로 메세지를 변경한다. */}  
        setmessage("😊 GOOD JAB 😊")
        return
        }
      
        else{
        {/* 버튼을 누른 상태라면 전략 스크린으로 파라미터 전달하고 넘어간다.*/} 
        props.navigation.navigate("strategy",props.route.params)
        }
    }

    return (
        /* 텍스트 창에 입력을 하다가 바깥 화면을 클릭시 키보드 창 내려감 */
        <TouchableWithoutFeedback onPress={() => {
              Keyboard.dismiss()
         }}>
       
        <View style={styles.container}>
        {/* 퀴즈 문제 */}
        <Text style = {styles.quiztext}>{props.route.params.text}</Text>

        {/* 퀴즈 오픈 질문*/}
        <Text  style = {styles.textstyle}> What do you think the problem is asking you to do?</Text>

        <ScrollView>
        {/* 텍스트 입력창*/}
        <TextInput
          style={styles.textInput}
           value = {data}
           onChangeText={changedata}
         />
        {/* 제출 버튼을 누를시 뜰 메세지 */}
        <Text style = {styles.textstyle}>{message}</Text>

        {/* 제출 버튼 */}
        <TouchableOpacity style ={styles.buttonstyle}
        onPress={() => nextstage( props)}
        >
        {/* 제출 버튼명 */} 
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
    quiztext:{
      margin:20,
      lineHeight:30,
      width:300,
      padding:10,
      backgroundColor:'#E4F7BA',
      borderColor:'blue',
      borderRadius: 10,
      borderWidth: 1
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
