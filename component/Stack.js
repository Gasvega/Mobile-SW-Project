import {createStackNavigator} from '@react-navigation/stack'
import Quizselect from './Quizselect';
import Quizopen from './Quizopen'
import Strategy from './Strategy'
import Strategystep from './Strategystep'
import React, { useState, useEffect } from 'react';
import Login from '../src/Login';
import Registration from "../src/Registration";
//import Logo from './Logo';

const Stack = createStackNavigator();
const StackNav= () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false,headerTitleAlign:'center'}}
      initialRouteName='Login'
      >
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
      {/* 로그인 스크린*/} 
      <Stack.Screen name = "Login" component = {Login}
      options = {{title:'Login',headerShown:'false'  
       }}/>
      {/* 회원가입 스크린*/} 
      <Stack.Screen name = "Registration" component = {Registration}
      options = {{title:'Registration',headerShown:'false'  
       }}/>
      </Stack.Navigator>
    )
}

export default StackNav