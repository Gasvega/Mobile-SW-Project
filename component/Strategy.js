import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  {db,firebase}  from '.././firebaseConfig';

import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 
export default function Strategy(props) {
    {/* 전략 1 텍스트 */}
    const [strategytext1,setstrategytext1] = useState("")
    {/* 전략 2 텍스트 */}
    const [strategytext2,setstrategytext2] = useState("")
    {/* 전략 3 텍스트 */}
    const [strategytext3,setstrategytext3] = useState("")

    {/* 전략 A 풀이 상태 */}
    const [acheck,setacheck] = useState(0)
    {/* 전략 B 풀이 상태 */}
    const [bcheck,setbcheck] = useState(0)
    {/* 전략 C 풀이 상태 */}
    const [ccheck,setccheck] = useState(0)

    {/* 전략 A 버튼 잠금 상태 */}
    const [alock,setalock] = useState(false)
    {/* 전략 B 버튼 잠금 상태 */}
    const [block,setblock] = useState(false)
    {/* 전략 C 버튼 잠금 상태 */}
    const [clock,setclock] = useState(false)

    const [first,setfirst] = useState(0)
    const [quizstate,setquizstate] = useState([])

    if (first == 0)
    {
      setfirst(1)
    }

    async function Readstep () {
        const data2 = await getDocs(collection(db, "users"))
        setquizstate(data2.docs.map(doc => ({ ...doc.data(), id: doc.id }))); 
    }

    useEffect(() => {
        Readstep()
        let quizlist = quizstate?.map((row,idx) => {
            if(row.id == firebase.auth().currentUser.uid)
            {
                return {
                        Quiz1_A : row.quiz1_A,
                        Quiz1_B : row.quiz1_B,
                        Quiz1_C : row.quiz1_C,

                        Quiz2_A : row.quiz2_A,
                        Quiz2_B : row.quiz2_B,
                        Quiz2_C : row.quiz2_C,

                        Quiz3_A : row.quiz3_A,
                        Quiz3_B : row.quiz3_B,
                        Quiz3_C : row.quiz3_C,

                        Quiz4_A : row.quiz4_A,
                        Quiz4_B : row.quiz4_B,
                        Quiz4_C : row.quiz4_C,

                        Quiz5_A : row.quiz5_A,
                        Quiz5_B : row.quiz5_B,
                        Quiz5_C : row.quiz5_C,

                        Quiz6_A : row.quiz6_A,
                        Quiz6_B : row.quiz6_B,
                        Quiz6_C : row.quiz6_C,

                        Quiz7_A : row.quiz7_A,
                        Quiz7_B : row.quiz7_B,
                        Quiz7_C : row.quiz7_C,

                        Quiz8_A : row.quiz8_A,
                        Quiz8_B : row.quiz8_B,
                        Quiz8_C : row.quiz8_C}
            }
        })


        if(props.route.params.num == 1)
        {
                  setacheck(quizlist[0]?.Quiz1_A)
                  setbcheck(quizlist[0]?.Quiz1_B)
                  setccheck(quizlist[0]?.Quiz1_C)
        }
        if(props.route.params.num == 2)
        {
                  setacheck(quizlist[0]?.Quiz2_A)
                  setbcheck(quizlist[0]?.Quiz2_B)
                  setccheck(quizlist[0]?.Quiz2_C)
        }
        if(props.route.params.num == 3)
        {
                  setacheck(quizlist[0]?.Quiz3_A)
                  setbcheck(quizlist[0]?.Quiz3_B)
                  setccheck(quizlist[0]?.Quiz3_C)
        }
        if(props.route.params.num == 4)
        {
                  setacheck(quizlist[0]?.Quiz4_A)
                  setbcheck(quizlist[0]?.Quiz4_B)
                  setccheck(quizlist[0]?.Quiz4_C)
        }
        if(props.route.params.num == 5)
        {
                  setacheck(quizlist[0]?.Quiz5_A)
                  setbcheck(quizlist[0]?.Quiz5_B)
                  setccheck(quizlist[0]?.Quiz5_C)
        }
        if(props.route.params.num == 6)
        {
                  setacheck(quizlist[0]?.Quiz6_A)
                  setbcheck(quizlist[0]?.Quiz6_B)
                  setccheck(quizlist[0]?.Quiz6_C)
        }
        if(props.route.params.num == 7)
        {
                  setacheck(quizlist[0]?.Quiz7_A)
                  setbcheck(quizlist[0]?.Quiz7_B)
                  setccheck(quizlist[0]?.Quiz7_C)
        }
        if(props.route.params.num == 8)
        {
                  setacheck(quizlist[0]?.Quiz8_A)
                  setbcheck(quizlist[0]?.Quiz8_B)
                  setccheck(quizlist[0]?.Quiz8_C)
        }

    {/* 전략 A 버튼 풀이 완료 상태이면 버튼을 잠근다. */}
    if(acheck==1)
    {
        setalock(true)
    }
    else{
        setalock(false)
    }    
    {/* 전략 B 버튼 풀이 완료 상태이면 버튼을 잠근다. */}
    if(bcheck==1)
    {
        setblock(true)
    }
    else{
        setblock(false)
    }  
    {/* 전략 C 버튼 풀이 완료 상태이면 버튼을 잠근다. */}
    if(ccheck==1)
    {
        setclock(true)
    }
    else{
        setclock(false)
    }  

    {/* 퀴즈 1 */} 
    if(props.route.params.num == 1)
    {
        setstrategytext1("Write an equation to solve the problem")
        setstrategytext2("Add on the shipping fee until I get to $85,75.")
        setstrategytext3("Subtract away from $85,75 until I get to O.")
    }
    {/* 퀴즈 2 */} 
    if(props.route.params.num == 2)
    {
        setstrategytext1("Add up her miles and then find out how many more she needs to get to 22 miles")
        setstrategytext2("Write an equation to solve it")
        setstrategytext3("Subtract her miles from 22 and see how many are left")
    }
    {/* 퀴즈 3 */} 
    if(props.route.params.num == 3)
    {
        setstrategytext1("Subtract the extra yards and then figure out how much fabric she used for each curtain")
        setstrategytext2("Write an equation to solve it")
        setstrategytext3("Use a diagram to try and understand the problem")
    }
    {/* 퀴즈 4 */} 
    if(props.route.params.num == 4)
    {
        setstrategytext1("Guess the number of points and see if it works")
        setstrategytext2("Write equations to solve the problem")
        setstrategytext3("Use a diagram to try and understand the problem")
    }
     {/* 퀴즈 5 */} 
    if(props.route.params.num == 5)
    {
        setstrategytext1("Write equations to solve the problem")
        setstrategytext2("Add on from 34.5 inches until I use up all the rope")
        setstrategytext3("Subtract from the total until I get to 0")
    }
    {/* 퀴즈 6 */} 
    if(props.route.params.num == 6)
    {
        setstrategytext1("Write an equation to solve it")
        setstrategytext2("Guess and check")
        setstrategytext3("Use a diagram to understand the problem")
    }
    {/* 퀴즈 7 */} 
    if(props.route.params.num == 7)
    {
        setstrategytext1("Write an inequality to solve the problem")
        setstrategytext2("Guess and check")
        setstrategytext3("Add up until I find the number of days")
    }
    {/* 퀴즈 8 */} 
    if(props.route.params.num == 8)
    {
        setstrategytext1("Guess and check")
        setstrategytext2("Write an inequality to solve the problem")
        setstrategytext3("Add up until I figure out the width of the garden.")
    }
    });

    return (
        <View style={styles.container}>
         {/* 퀴즈 문제 */} 
        <Text style = {styles.quiztext}>{props.route.params.text}</Text>
         {/* 전략 선택 메세지 */} 
        <Text style = {styles.textstyle}>❓ Which strategy do you want to try?</Text>

        <ScrollView>
        {/* 전략 스텝 스택 스크린으로 퀴즈 번호와 전략 번호를 파라미터로 전달 */}    
        <View style={styles.container2}>
        <TouchableOpacity style ={styles.buttonstyle}
         disabled={alock}
         onPress = {() => props.navigation.navigate("strategystep",{paramtext:props.route.params.text, paramnum:props.route.params.num,step:'A'})}>
        {
            /* 전략 A를 깼으면 텍스트를 회색,줄 긋기로 표시*/ 
            (acheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
            ?  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',color:'gray', textDecorationLine:'line-through'}}>{strategytext1}</Text>
            :  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',}}>{strategytext1}</Text>
        }
        </TouchableOpacity>
        {
            /* 전략 A를 깼으면 체크 상태로 표시 못 꺳으면 체크 아닌 상태로 표시 */
            (acheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
            ? <MaterialCommunityIcons name="check-circle" size={30} color="black" />
            : <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color="black" />
        }
        </View>

        {/* 전략 스텝 스택 스크린으로 퀴즈 번호와 전략 번호를 파라미터로 전달 */}   
        <View style={styles.container2}>
        <TouchableOpacity style ={styles.buttonstyle}
         disabled={block}
         onPress = {() =>     props.navigation.navigate("strategystep",{paramtext:props.route.params.text, paramnum:props.route.params.num,step:'B'})}>
            {
            /* 전략 B를 깼으면 텍스트를 회색,줄 긋기로 표시*/    
            (bcheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
             ?  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',color:'gray', textDecorationLine:'line-through'}}>{strategytext2}</Text>
             :  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',}}>{strategytext2}</Text>
            }
        </TouchableOpacity>
        {
            /* 전략 B를 깼으면 체크 상태로 표시 못 꺳으면 체크 아닌 상태로 표시 */
            (bcheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
            ? <MaterialCommunityIcons name="check-circle" size={30} color="black" />
            : <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color="black" />
        }
        </View>

        {/* 전략 스텝 스택 스크린으로 퀴즈 번호와 전략 번호를 파라미터로 전달 */}
        <View style={styles.container2}>
        <TouchableOpacity style ={styles.buttonstyle}
         disabled={clock}
         onPress = {() =>     props.navigation.navigate("strategystep",{paramtext:props.route.params.text, paramnum:props.route.params.num,step:'C'})}>
            {
             /* 전략 C를 깼으면 텍스트를 회색,줄 긋기로 표시*/ 
            (ccheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
             ?  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',color:'gray', textDecorationLine:'line-through'}}>{strategytext3}</Text>
             :  <Text style = {{fontSize:12.5,margin : 10,justifyContent: 'center',textAlign: 'center',}}>{strategytext3}</Text>
            }
        </TouchableOpacity>
        {
            /* 전략 C를 깼으면 체크 상태로 표시 못 꺳으면 체크 아닌 상태로 표시 */
            (ccheck==1) // 이부분은 데이터베이스 가져 와서 비교하는 형식으로 바꿔야 함
            ? <MaterialCommunityIcons name="check-circle" size={30} color="black" />
            : <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color="black" />
        }
        </View>
        </ScrollView>
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
    container2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonstyle:
    {
        margin:10,
        borderWidth: 3,
        borderRadius: 15,
        borderColor:'blue',
        height:70,
        width:330,
        justifyContent: 'center',
        textAlign: 'center',
    },
    textstyle:{
        fontSize:12.5,
        margin : 10,
        justifyContent: 'center',
        textAlign: 'center',
    }
});
