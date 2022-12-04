import { CardStyleInterpolators } from '@react-navigation/stack';
import { TabView } from 'react-native-tab-view';
import { Text, View, useWindowDimensions, StyleSheet, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import Question from '../Text.js/Answer';
import Q7_A from '../Question/Q7_A';
import Q7_B from '../Question/Q7_B';
import Q7_C from '../Question/Q7_C';

const Q7 = (props) => {
    return (
        /*백그라운드 디자인*/
        <SafeAreaView style = {styles.Q7_MainView}> 
            {/*문제 번호 화면*/}   
            <View style = {styles.NumberOut}>
                {/*문제 번호 위치 설정 뷰*/}
                <View style = {styles.NumberLocation}>
                    <Text style = {styles.subText}>
                         Q7.
                    </Text>
               </View>
            </View>
            {/* 문제 출력 화면*/}
            <View style = {styles.Q7_OutPut}>
                <Text style = {styles.mainText} >
                Jim needs to rent a car.
                A rental company charges $21.00 
                per day to rent a car and $0.10
                for every mile driven. He will
                travel 250 miles. He has $115.00
                to spend. How many days can he 
                rent the car for?
                </Text>
            </View>
            {/* 풀이 과정 설정*/}
            <View style = {styles.submission}>
            {/* 버튼 */}
            <View style = {styles.Button}>
                <TouchableOpacity onPress = { () => {
                    props.navigation.navigate("Q7_A.")
                }}>
                    <Text style = {{
                        fontSize : 20,
                        color : "black",
                        }}>
                        Write an equation to solve it
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.Button}>
                <TouchableOpacity onPress = { () => {
                    props.navigation.navigate("Q7_B.")
                }}>
                    <Text style = {{
                        fontSize : 20,
                        color : "black",
                        }}>
                        Guess and check
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.Button}>
                <TouchableOpacity onPress = { () => {
                    props.navigation.navigate("Q7_C.")
                }}>
                    <Text style = {{
                        fontSize : 20,
                        color : "black",
                        }}>
                        Use a diagram to understand the problem
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    /* 메인화면 */
    Q7_MainView: {
        flex : 1,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
      },
    /* 문제 화면 */
    Q7_OutPut: {
        flex : 2,
        backgroundColor : "white",
        marginBottom : 1,
        marginTop : 5,
        width: "90%",
        borderColor: "#D1B2FF",
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    /* 문제 번호 */
    NumberOut : {
        flex:0.3,
        backgroundColor : "white",
        width: "30%",
        marginBottom : 5,
        marginTop : 10,
        //marginLeft: 20,
        width: "90%",
    },
    /* Step정렬 style */
    StepSort:{
        flex:4,
        marginTop : 5,
        //marginLeft: 20,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    /* 문제 Text */
    mainText: {
        fontSize : 19,
        fontStyle : "bold",
    },
    /* 문제 번호 Text */
    subText: {
        fontSize : 26,
        fontStyle : "bold",
        alignItems: 'flex-end'
    },
    /* 문제 번호 위치 */
    NumberLocation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    submission: {
        flex : 1,
        backgroundColor : "#FFFFFF",
        marginBottom : 1,
        marginTop : 5,
        width: "90%",
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },  
    /* 버튼 설정 */
    Button:{
        height: 45,
        width: 400,
        backgroundColor : "white",
        borderColor: "#BCE55C",
        borderStyle: "solid",
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
});

export default Q7;
