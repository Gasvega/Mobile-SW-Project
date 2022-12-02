import * as React from 'react'
import { View, StyleSheet,TouchableWithoutFeedback,Keyboard,Text,KeyboardAvoidingView,TextInput,TouchableOpacity,Platform} from 'react-native';
import TabviewControl from './Tabviewcontrol'
import { useState ,useEffect} from 'react';

export default function Strategystep(props) {
  {/* 탭뷰 인덱스 */} 
  const [index,setindex] = useState(0);
  {/* 제출 버튼명 */} 
  const [buttontext, setbuttontext] = useState("Submit");
  {/* 메세지 */} 
  const [message,setmessage] = useState(""); 
  {/* 문제 풀이 완료 된 Step 리스트 */}
  const [finishstate,setfinishstate] = useState([]);

  {/* 텍스트 인풋 */} 
  const [data, setdata] = useState("");
  const changedata = (event) => {
      setdata(event)
  }

  {/* 인덱스 렌더링이 발생할 시 */} 
  useEffect(() => {
      {/* 현재 탭뷰 스텝 문제가 완료되지 않은 문제라면 */} 
      if (finishstate.includes(index-1) == false)
      {
        {/* 다시 완료 되지 않은 스텝 단계로 돌아간다. */} 
        if(index >= 1)
        {
        setindex(index-1)
        }
      }
      {/* 현재 탭뷰 스텝 문제가 완료된 문제라면 */} 
      if(finishstate.includes(index))
      {
        {/* 다음 스텝 단계로 간다. */} 
        setindex(index+1)
      }
  },[index]);

  {/* 제출 버튼을 누르면*/} 
  const textcheak = () =>{
      {/* 제출 버튼명이 Next step이 아니라면*/} 
      if(buttontext != "Next Step")
      {
        {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈 Congratulations")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Step")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next step')
      }
      else{
        if(index < 3)
        {
        {/* 다음 단계로 넘어간다.*/}  
        setindex(index+1)
        {/* 메세지를 초기화 한다.*/}  
        setmessage("")
        {/* 버튼명을 초기화 한다.*/}  
        setbuttontext("Submit")
        }
        }
      }
  
    return (
      /* 텍스트 창에 입력을 하다가 바깥 화면을 클릭시 키보드 창 내려감 */
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
       }}>
      
      <View style={styles.container2}>
      {/* 키보드가 올라올때 뷰도 같이 올라오게 한다.*/}  
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  style={styles.container2}>
      <View style={styles.container}>
      {/* 퀴즈 문제 */} 
      <Text style = {styles.quiztext}>{props.route.params.paramtext}</Text>
      </View>
      </KeyboardAvoidingView>
      {/* 탭뷰 컴포넌트 */}
      <TabviewControl propsdata = {props} setindex={setindex} index={index}> </TabviewControl>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  style={styles.container2}>
      <View style={styles.container}>
      {/* 텍스트 입력창 */}  
      <TextInput
          style={styles.textInput}
          value = {data}
          onChangeText={changedata}
          multiline={true}
         />
      </View>
      </KeyboardAvoidingView>

      {/* 제출 버튼을 누를시 뜰 메세지 */}
      <Text style = {styles.textstyle} >{message}</Text>  

      {/* 제출 버튼 */}  
      <TouchableOpacity  style={styles.buttonstyle}  
        onPress = {()=> textcheak()}>
        { 
          /* 문제 풀이 완료 된 스텝 단계이면 'next Step' 아직 완료 안됐으면 Submit 으로 버튼명 설정*/
          (finishstate.includes(index))
          ? <Text style={{textAlign:'center',color:'red'}} > Next Step </Text>
          : <Text style={{textAlign:'center'}} > Submit </Text>
        }
      </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent:'center',
      alignItems:'center',
    },
    container2: {
      flex:1,
      backgroundColor: '#fff',
      justifyContent:'center',
    },
    quiztext:{
      lineHeight:Platform.select({ios: 30, android: 25}),
      height:Platform.select({ios: 185, android: '100%'}),
      width:300,
      backgroundColor:'#E4F7BA',
      borderColor:'blue',
      borderRadius: 10,
      borderWidth: 1
    },
    buttonstyle:
    {
      marginBottom:20,
      borderWidth: 3,
      borderRadius: 15,
      borderColor:'blue',
      height:30,
      marginLeft:40,
      marginRight:40,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems:'center',
    },
    textstyle:{
      marginBottom : 20,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems:'center',
    },
    textInput: {
      marginBottom: 40,
      height: Platform.select({ios: 160, android: '77%'}),
      width:300,
      borderWidth: 3,
      borderRadius: 10,
      alignItems: 'center',
      textAlign:'center'
    },
});
