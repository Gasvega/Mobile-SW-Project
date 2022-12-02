
import {createStackNavigator} from '@react-navigation/stack'
import {ScrollView,View,KeyboardAvoidingView} from 'react-native';
import Quizselect from './Quizselect';
import Quizopen from './Quizopen'
import Strategy from './Strategy'
import Strategystep from './Strategystep'


const Stack = createStackNavigator();

const StackNav= () => {

    return (
      
        <Stack.Navigator screenOptions={{headerShown: false,headerTitleAlign:'center'}}>
       

      {/* <Stack.Screen
          name="drawernavi"
          component={Drawertest}
          options={{headerShown:false,
            }}
        /> */}

  
<Stack.Screen name = "quizselect" component = {Quizselect}
      options = {{title:'Quiz Select', headerShown:'false'
    }}/>
      <Stack.Screen name = "quizopen" component = {Quizopen}
      options = {{title:'Open-ended question',headerShown:'false',
    }}/>

       <Stack.Screen name = "strategy" component = {Strategy}
      options = {{title:'Choose your strategy',headerShown:'false',
  
      }}/>
       <Stack.Screen name = "strategystep" component = {Strategystep}
      options = {{title:'Solve the problem',headerShown:'false'
      
      }}/>

    </Stack.Navigator>
  
    )
}

export default StackNav