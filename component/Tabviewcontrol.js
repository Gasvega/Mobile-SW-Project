import * as React from 'react';
import { View, StyleSheet,Text,ScrollView} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState ,useEffect} from 'react';

export default function TabViewExample(props) {
 
  const [steptext1,setsteptext1] = useState("")
  const [steptext2,setsteptext2] = useState("")
  const [steptext3,setsteptext3] = useState("")
  const [steptext4,setsteptext4] = useState("")
  let index = props.index

  {/* 탭뷰 Step 단계 문제 설정 */} 
  useEffect(() => {

    if(props.propsdata.route.params.paramnum == 1 && props.propsdata.route.params.step == 'A'){
     setsteptext1("OK. Using p to represent the number of pictures, write an equation that represents how p, $7.50 per picture, and the $3.25 shipping fee combine to make $85.75")
     setsteptext2("Ok, your equation is equivalent to 3.25 + 7.50p = 85.75 Can you solve to find the value of p?")
     setsteptext3("Please enter the correct answer")
     setsteptext4("Please enter the correct answer")
    }
    else if (props.propsdata.route.params.paramnum == 1 && props.propsdata.route.params.step == "B"){
     setsteptext1("OK, let’s try that. Start from $3.25. How many times do you have to add $7.50 to get to $85.75?")
     setsteptext2("Please enter the correct answer!")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 1 && props.propsdata.route.params.step == "C"){
     setsteptext1("OK. Start with $85.50. Subtract the shipping fee, then count how many times you have to subtract $7.50 to get to 0.")
     setsteptext2("Please enter the correct answer!")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 2 && props.propsdata.route.params.step == "A"){
     setsteptext1("Let’s add up Jen’s total from Monday through Thursday. How many miles has she run?")
     setsteptext2("OK, if she ran 16 1/8 miles, how many more does she have to run to reach 22 miles?")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 2 && props.propsdata.route.params.step == "B"){
     setsteptext1("What equation will represent the situation? Use the letter “m” as your vairable")
     setsteptext2("Your equation is equivalent to 16  1/8 + m = 22. Can you solve for m?")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 2 && props.propsdata.route.params.step == "C"){
     setsteptext1("Let’s subtract Jen’s miles from Monday through Friday from 22. How many miles does Jen have left to run?")
     setsteptext2("Please enter the correct answer!")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 3 && props.propsdata.route.params.step == 'A') {
     setsteptext1("Let’s subtract the extra fabric. How much did Jennifer use for 6 curtains?")
     setsteptext2("Yes! So she used 64.8 yards of fabric for six curtains. Now, how much fabric did she use for one curtain?")
     setsteptext3("Please enter the correct answer")
     setsteptext4("Please enter the correct answer")
    }
    else if(props.propsdata.route.params.paramnum == 3 && props.propsdata.route.params.step == "B"){
     setsteptext1("What equation will represent the situation? Use the letter “m” as your vairable")
     setsteptext2("Nice job! That equation looks good. Now can you solve for “m”?")
     setsteptext3("Please enter the correct answer!")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 3 && props.propsdata.route.params.step == "C"){
     setsteptext1("The shorter rectangles are the curtains. The longer one is the left over fabric. How long is the longer rectangle?")
     setsteptext2("Great job! Can you find out how long all 6 of the shorter rectangles are combined?")
     setsteptext3("Fantastic! Now let’s find how long each of those shorter rectangles are.")
     setsteptext4("Please enter the correct answer!")
    }
    else if(props.propsdata.route.params.paramnum == 4 && props.propsdata.route.params.step == "A"){
     setsteptext1("Ok, you want to guess-and-check. How many points do you want to guess that Elena won?")
     setsteptext2("Ok, you guessed [x] points for Elena. Then how many would Karla and Faye win?")
     setsteptext3("Nice work! Now, what do Elena’s, Karla’s and Faye’s scores add up to?")
     setsteptext4("Nice work! The points for Elena, Karla, and Faye add up to 114, so that seems correct! So who scored the most?")
    }
    else if(props.propsdata.route.params.paramnum == 4 && props.propsdata.route.params.step == "B"){
     setsteptext1("What equation will represent the situation? Use the letter “e” as your vairable")
     setsteptext2("Great! That equation looks good. Now, solve for e and enter your answer.")
     setsteptext3("Ok, Elena scored 21 points. Then how many points did Karla and Faye score?")
     setsteptext4("So who scored the most?")
    }
    else if(props.propsdata.route.params.paramnum == 4 && props.propsdata.route.params.step == "C"){
     setsteptext1("Each tall rectangle is equal to the number of points that Elena won. How many points are ALL of the tall rectangles together?")
     setsteptext2("Ok, so the four bars represent 84 points. Then how many points did Elena score?")
     setsteptext3("That seems correct. So then, how many points did Karla and Faye score?")
     setsteptext4("So who scored the most?")
    }
  });

  {/* 탭뷰 뷰 */} 
  const [routes] = useState([
    { key: 'first', title: 'Step 1' },
    { key: 'second', title: 'Step 2' },
    { key: 'third', title: 'Step 3' },
    { key: 'fourth', title: 'Step 4' },
  ]); 

  {/* 탭뷰 Step 1 */} 
  const FirstRoute = () => (
  <View  style ={styles.firstscene}>
  <ScrollView>
  {/* 탭뷰 Step 1 문제 */} 
  <Text style ={styles.quiztext}>
        {steptext1}
  </Text>
  </ScrollView>
  </View>
  );

  {/* 탭뷰 Step 2 */}  
  const SecondRoute = () => (
   <View style ={styles.secondscene}>
  {/* 탭뷰 Step 2 문제 */} 
   <Text style ={styles.quiztext}>
   {steptext2}
   </Text>
   </View>
  );

  {/* 탭뷰 Step 3 */} 
  const ThirdRoute = () => (
   <View style ={styles.thirdscene}>
  {/* 탭뷰 Step 3 문제 */} 
   <Text style ={styles.quiztext}>
   {steptext3}
   </Text>  
   </View>
  );

  {/* 탭뷰 Step 4 */} 
  const fourthRoute = () => (
   <View style ={styles.fourthscene}>
  {/* 탭뷰 Step 4 문제 */} 
   <Text style ={styles.quiztext} >
   {steptext4} </Text>
   </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third : ThirdRoute,
    fourth : fourthRoute
  });

  return (
  <TabView 
    navigationState={{index, routes }}
    renderScene={renderScene}
    onIndexChange={props.setindex}
  />
  );
}

const styles = StyleSheet.create({
  buttonstyle:
  {
    backgroundColor: '#0054FF',
    justifyContent: 'center',
    borderColor:'blue',
    borderRadius: 5,
    borderWidth: 1
  },
  buttontxstyle:
  {
    backgroundColor: '#0054FF',
    color:'white'
  },
  firstscene: {
    backgroundColor: '#D9E5FF',
    alignItems: 'center',
  },
  quiztext:{
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight:Platform.select({ios: 24, android: 25}),
    height:80,
    width:300,
  },
  checktext:{
    textAlign:'center',
    margin:10,
  },
  secondscene: {
    backgroundColor: '#D4F4FA',
    alignItems: 'center'
  },
  thirdscene: {
    backgroundColor: '#CEFBC9',
    alignItems: 'center'
  },
  fourthscene: {
    backgroundColor: '#E4F7BA',
    alignItems: 'center'
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    width:300,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1
  },
 
});