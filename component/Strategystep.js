import * as React from 'react'
import { View, StyleSheet,TouchableWithoutFeedback,Keyboard,Text,KeyboardAvoidingView,TextInput,TouchableOpacity,Platform} from 'react-native';
import TabviewControl from './Tabviewcontrol'
import { useState ,useEffect} from 'react';
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

export default function Strategystep(props) {
  {/* 탭뷰 인덱스 */} 
  const [index,setindex] = useState(0);
  {/* 제출 버튼명 */} 
  const [buttontext, setbuttontext] = useState("Submit");
  {/* 메세지 */} 
  const [message,setmessage] = useState(""); 
  {/* 문제 풀이 완료 된 Step 리스트 */}
  const [finishstate,setfinishstate] = useState([]);

  const [count,setcount] = useState(0);

  const [quizlist,setquizlist] = useState(0);

  {/* 텍스트 인풋 */} 
  const [data, setdata] = useState("");
  const changedata = (event) => {
      setdata(event)
  }

  const [first,setfirst] = useState(0)
  const [finishcount,setfinishcount] = useState(0)
  const [stepanswer1,setstepanswer1] = useState({})
  const [stepanswer2,setstepanswer2] = useState({})
  const [stepanswer3,setstepanswer3] = useState({})
  const [stepanswer4,setstepanswer4] = useState({})
 
  if (first == 0)
  {
    Readstep()
    setfirst(1)
  }
    const [quizs,setquizs] = useState([])
    async function Readstep () {
    const data2 = await getDocs(collection(db, "quiz" + props.route.params.paramnum))
    setquizs(data2.docs.map(doc => ({ ...doc.data(), id: doc.id })));

  }
  {/* 스텝 풀이 상태 DB 업데이트 */}
  async function Updatestep () {
    try{
      const docRef = doc(db, "users", firebase.auth().currentUser.uid);
      if(props.route.params.paramnum == 1)
      {

        if (props.route.params.step == "A")
        {
          
          await updateDoc(docRef, {
            quiz1_A: 1,
        });
        
        }
        if (props.route.params.step == "B")
        {
        
          await updateDoc(docRef, {
            quiz1_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
       
          await updateDoc(docRef, {
            quiz1_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 2)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz2_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz2_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz2_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 3)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz3_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz3_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz3_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 4)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz4_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz4_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz4_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 5)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz5_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz5_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz5_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 6)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz6_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz6_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz6_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 7)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz7_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz7_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz7_C: 1,
        });
        } 
      }

      if(props.route.params.paramnum == 8)
      {

        if (props.route.params.step == "A")
        {
          await updateDoc(docRef, {
            quiz8_A: 1,
        });
        }
        if (props.route.params.step == "B")
        {
          await updateDoc(docRef, {
            quiz8_B: 1,
        });
        }
        if (props.route.params.step == "C")
        {
          await updateDoc(docRef, {
            quiz8_C: 1,
        });
        } 
      }

    }catch(error){
      console.log(error.message)
    }
}


{/* 스텝 최대 단계를 설정해준다. */}
function Maxsetting () {
  try{
  
    if(props.route.params.paramnum == 1)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(2)

      }
      if (props.route.params.step == "B")
      {
        setfinishcount(1)
        setcount(1)
     
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(1)
        setcount(1)
 
      } 
    }

    if(props.route.params.paramnum == 2)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(1)
        setcount(1)
      } 
    }

    if(props.route.params.paramnum == 3)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(3)
      } 
    }

    if(props.route.params.paramnum == 4)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(4)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(4)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(4)
      } 
    }

    if(props.route.params.paramnum == 5)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(2)
      } 
    }

    if(props.route.params.paramnum == 6)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(2)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(4)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(2)
      } 
    }

    if(props.route.params.paramnum == 7)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(3)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(3)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(2)
      } 
    }

    if(props.route.params.paramnum == 8)
    {

      if (props.route.params.step == "A")
      {
        setfinishcount(4)
      }
      if (props.route.params.step == "B")
      {
        setfinishcount(3)
      }
      if (props.route.params.step == "C")
      {
        setfinishcount(3)
      } 
    }

    
  }catch(error){
    console.log(error.message)
  }
}
  {/* 인덱스 렌더링이 발생할 시 */} 
  useEffect(() => {
    {/* 최대 스텝 단계를 설정한다.*/} 
    Maxsetting()
    
  
      {/* 문제 풀이 현황을 DB에 업데이트 한다.*/}
     
   
  
      {/* 현재 탭뷰 스텝 문제가 완료되지 않은 문제라면 */} 
      if (finishstate.includes(index-1) == false)
      {
        {/* 다시 완료 되지 않은 스텝 단계로 돌아간다. */} 
        if(index >= 1)
        {
        setindex(index-1)
        }
      }

  },[index]);

  {/* 제출 버튼을 누르면*/} 
  const textcheak = () =>{
  
    quizs?.map((row,idx) => {

      if (row.id == "strategy" + props.route.params.step)
      {
        setquizlist({Step1:row.Step1,Step2:row.Step2,Step3:row.Step3,Step4:row.Step4})
      }
      })


      
      {/* 제출 버튼명이 Next step이 아니라면*/} 
      if(buttontext.includes("Next") == false)
      {
        
        
        if (index == 0 && data.includes(quizlist?.Step1) && quizlist?.Step1 != undefined)
        {
          
          if(finishcount==count && props.route.params.paramnum == 1)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! If you’re right, then Todd bought 11 pictures.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }

          else if(finishcount==count && props.route.params.paramnum == 2)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }


          else if(finishcount==count && props.route.params.paramnum == 3)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 4)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! It looks like Faye scored the most.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 5)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Mario can cut 6 sections of rope. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        
            
          else if(finishcount==count && props.route.params.paramnum == 6)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! The shorter segments are 20 inches. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
         
            
          else if(finishcount==count && props.route.params.paramnum == 7)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! Jim can rent the car for 4 days!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
       
            
          else if(finishcount==count && props.route.params.paramnum == 8)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice work! That’s correct!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
          else if (finishcount != 0)
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
            

        }
        else if (index == 1 && data.includes(quizlist?.Step2))
        {
          if(finishcount==count && props.route.params.paramnum == 1)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! If you’re right, then Todd bought 11 pictures.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }

          else if(finishcount==count && props.route.params.paramnum == 2)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }


          else if(finishcount==count && props.route.params.paramnum == 3)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 4)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! It looks like Faye scored the most.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 5)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Mario can cut 6 sections of rope. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        
            
          else if(finishcount==count && props.route.params.paramnum == 6)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! The shorter segments are 20 inches. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
         
            
          else if(finishcount==count && props.route.params.paramnum == 7)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! Jim can rent the car for 4 days!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
       
            
          else if(finishcount==count && props.route.params.paramnum == 8)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice work! That’s correct!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
          else if (finishcount != 0)
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
        }
        else if (index == 2 && data.includes(quizlist?.Step3))
        {
          if(finishcount==count && props.route.params.paramnum == 1)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! If you’re right, then Todd bought 11 pictures.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }

          else if(finishcount==count && props.route.params.paramnum == 2)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }


          else if(finishcount==count && props.route.params.paramnum == 3)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 4)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! It looks like Faye scored the most.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 5)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Mario can cut 6 sections of rope. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        
            
          else if(finishcount==count && props.route.params.paramnum == 6)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! The shorter segments are 20 inches. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
         
            
          else if(finishcount==count && props.route.params.paramnum == 7)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! Jim can rent the car for 4 days!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
       
            
          else if(finishcount==count && props.route.params.paramnum == 8)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice work! That’s correct!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
          else if (finishcount != 0)
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
        
        }
        else if (index == 3 && data.includes(quizlist?.Step4))
        {
          if(finishcount==count && props.route.params.paramnum == 1)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! If you’re right, then Todd bought 11 pictures.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }

          else if(finishcount==count && props.route.params.paramnum == 2)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! You’ve found that Jen needs to run another 5 7/8 miles to reach her goal.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }


          else if(finishcount==count && props.route.params.paramnum == 3)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Jennifer used 10.8 yards of fabric for each curtain. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 4)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Ok! It looks like Faye scored the most.")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        

          else if(finishcount==count && props.route.params.paramnum == 5)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! Mario can cut 6 sections of rope. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
        
            
          else if(finishcount==count && props.route.params.paramnum == 6)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice! The shorter segments are 20 inches. Let’s try a different method!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
         
            
          else if(finishcount==count && props.route.params.paramnum == 7)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Fantastic! Jim can rent the car for 4 days!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
       
            
          else if(finishcount==count && props.route.params.paramnum == 8)
          {
            Updatestep()
             {/* 완료된 스텝 리스트에 추가한다.*/} 
        setfinishstate([...finishstate,index])
        {/* 메세지를 바꾼다.*/}  
        setmessage("🎉🎈Nice work! That’s correct!")
        {/* 버튼명을 바꾼다.*/}  
        setbuttontext("Next Strategy")
        {/* 정답을 알림해준다.*/}  
        alert('answer! go to the next strategy')
          }
          else if (finishcount != 0)
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
        }
        else if (quizlist?.Step1 != undefined || quizlist?.Step2 != undefined || quizlist?.Step3 != undefined || quizlist?.Step4 != undefined)
        {
        {/* 완료된 스텝 리스트에 추가한다.*/} 
        {/* 메세지를 바꾼다.*/}  
        setmessage("💡 Wrong. Try again!")
        {/* 버튼명을 바꾼다.*/}  
        {/* 정답을 알림해준다.*/}  
        alert('Wrong. Try again!')
        }
      }
      else{
      if(index < 3 && finishcount>count && finishcount != 1 )
        {
          {/* 다음 단계로 넘어간다.*/}  
          
          setcount(index+2)
          {/* 메세지를 초기화 한다.*/}  
          setmessage("")
          setbuttontext("Submit")
          setdata("")
          setindex(index+1)
          
         
          {/* 버튼명을 초기화 한다.*/}  
      }
      else
      {
        setcount(index+2)
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
      <Text style = {styles.textstyle} > 
      {
          (finishstate.includes(index))
          ? <Text style={{textAlign:'center'}} > {message} </Text>
          : <Text style={{textAlign:'center'}} > {message} </Text>
      }

      
      </Text>  

      {/* 제출 버튼 */}  
      <TouchableOpacity  style={styles.buttonstyle}  
        onPress = {()=> textcheak()}>
          {
            (finishstate.includes(index))
           ? <Text style={{textAlign:'center'}} > Next Step </Text>
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
