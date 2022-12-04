import * as React from "react";
import { useState } from 'react';
import Question from '../Text.js/Answer';
import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Q7 from "../Selecte/Q7_Selecte";

export default function TabViewExample(props) {
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
   
    const [routes] = React.useState([
      { key: "first", title: "Step1" },
      { key: "second", title: "Step2" }
    ]);

    
const FirstRoute = (props) => (
    <View style = {styles.StepStyle}>
        {/* 각 뷰 위치 설정 */}
        <View style = {styles.Step}>
            {/* 풀이 과정 */}
            <Text style = {styles.StepText}>
            What inequality will represent 
            the situation? Use the letter 
            “d” as your vairable
            </Text>
        </View>
        {/* 풀이 입력 위치 설정 */}
        <View style = {styles.Answer}>
            <Question></Question>
        </View>
        {/* 제출 버튼 위치 */}
        <View style = {styles.submission}>
            {/* 버튼 */}
            <View style = {styles.Button}>
            <TouchableOpacity onPress = { () => {
                    setIndex(1)
                }}>
                    <Text style = {{
                        fontSize : 30,
                        color : "white",
                        }}>
                        comfirmation
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const SecondRoute = (props) => (
    <View style = {styles.StepStyle}>
        <View style = {styles.Step}>
            <Text style = {styles.StepText}>
            Nice job! That inequality looks good. 
            Now can you solve for “d” and enter 
            your answer as an inequality?
            </Text>
        </View>
        <View style = {styles.Answer}>
            <Question></Question>
        </View>
        <View style = {styles.submission}>
            <View style = {styles.Button}>
                <TouchableOpacity onPress = { () => {
                    props.navigation.navigate("Q7.")
                }}>
                    <Text style = {{
                        fontSize : 30,
                        color : "white",
                        }}>
                        comfirmation
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View> 
);

const renderScene = SceneMap({
    first:FirstRoute,
    second: SecondRoute 
  });



  
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        {...props}
      />
    );
  }


const styles = StyleSheet.create({
    /* Step정렬 style */
    StepSort:{
        flex:0.5,
        marginTop : 5,
        marginLeft: 20,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    /* Step 디자인 */
    StepStyle : {
        flex:1,
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
    },
    /* 각 뷰 위치 설정 */
    Step: {
        flex : 1,
        backgroundColor : "#FAECC5",
        marginBottom : 1,
        marginTop : 5,
        width: "90%",
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    /* 풀이 과정 글자 설정 */
    StepText:{
        fontSize : 17,
        fontStyle : "bold",
    },
    /* 풀이 입력 위치 설정*/
    Answer:{
        flex:3,
        marginTop : 5,
        marginBottom : 5,
        marginLeft: 20,
        marginRight: 20,
        width: "90%",
    },
    /* 버튼 위치*/
    submission: {
        flex : 1,
        backgroundColor : "#FFFFFF",
        marginBottom : 1,
        marginTop : 5,
        width: "90%",
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    /* 버튼 설정 */
    Button:{
        height: 35,
        width: 200,
        backgroundColor : "#BCE55C",
        borderColor: "#86E57F",
        borderStyle: "solid",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
});