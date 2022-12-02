import {createStackNavigator} from '@react-navigation/stack'
import Quizselect from './Quizselect';
import Quizopen from './Quizopen'
import Strategy from './Strategy'
import Strategystep from './Strategystep'

const Stack = createStackNavigator();
const StackNav= () => {

    return (
      
      <Stack.Navigator screenOptions={{headerShown: false,headerTitleAlign:'center'}}>
      {/* 퀴즈 선택 스크린*/} 
      <Stack.Screen name = "quizselect" component = {Quizselect}
      options = {{title:'Quiz Select', headerShown:'false'
       }}/>
      {/* 퀴즈 오픈 문제 스크린*/} 
      <Stack.Screen name = "quizopen" component = {Quizopen}
      options = {{title:'Open-ended question',headerShown:'false',
       }}/>
      {/* 전략 선택 스크린*/} 
      <Stack.Screen name = "strategy" component = {Strategy}
      options = {{title:'Choose your strategy',headerShown:'false',
       }}/>
      {/* 전략 스텝 스크린*/} 
      <Stack.Screen name = "strategystep" component = {Strategystep}
      options = {{title:'Solve the problem',headerShown:'false'  
       }}/>

      </Stack.Navigator>
  
    )
}

export default StackNav