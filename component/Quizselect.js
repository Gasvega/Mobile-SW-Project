import * as React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,ScrollView} from 'react-native';
export default function Quizselect(props) {
    const Quiz1 = "Todd orders pictures from a photographer. Each picture costs $7.50. A one-time shipping fee of $3.25 is added to the cost of the order. The total cost of Todd’s order before tax is $85.75. How many pictures did Todd order?"
    const Quiz2 = "Jen wants to run a total of 22 miles in five days. The table shows her log for the miles she ran on Monday, Tuesday, Wednesday, and Thursday. How many miles must Jen run on Friday to reach her goal?"
    const Quiz3 = "Jennifer has 84.5 yards of fabric to make curtains. She makes 6 identical curtains and has 19.7 yards of fabric remaining. How many yards of fabric does Jennifer use per curtain?"
    const Quiz4 = "Elena, Karla, and Faye are playing a card game where they score points. Karla scores twice the number of points Elena does, and Faye scores 30 points more than Elena does. The sum of their three scores is 114. Who scores more points, Karla or Faye?"
    const Quiz5 = "Mario is setting up a new tent during a camping trip. The tent came with 7 feet of rope. The instructions are to use 34.5 inches of the rope to tie a tarp on top of the tent. Then, the remaining rope should be cut into 8¼-inch sections to tie the tent to stakes in the ground. Mario will use all of the rope as instructed. Write and solve an equation to determine the number of 8¼-inch sections of rope Mario can cut from the rope."
    const Quiz6 = "A rectangle has a length that is unknown but is 12 inches longer than its width. The perimeter of the rectangle is 104 inches. What is the width of the rectangle?"
    const Quiz7 = "Jim needs to rent a car. A rental company charges $21.00 per day to rent a car and $0.10 for every mile driven. He will travel 250 miles. He has $115.00 to spend. How many days can he rent the car for?"
    const Quiz8 = "Owen is designing a rectangular garden whose length is 25 feet. He needs to put fencing all around the exterior of the garden and wants to use less than 80 feet of fencing. How wide could the garden be?"

    return (
        <View style={{backgroundColor: '#fff'}}>
            <ScrollView>
            <View style={styles.container}>
            {/* Quiz1 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:1,text:Quiz1})}>
            <Text style={styles.textstyle} >Quiz 1</Text>
            
            {/* Quiz2 */}
            </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:2,text:Quiz2})}
            >
            <Text style={styles.textstyle} >Quiz 2</Text>
            </TouchableOpacity>


            </View>
            <View style={styles.container}>
            {/* Quiz3 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:3,text:Quiz3})}
            >
            <Text style={styles.textstyle} >Quiz 3</Text>
            </TouchableOpacity>

            {/* Quiz4 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:4,text:Quiz4})}
            >
            <Text style={styles.textstyle} >Quiz 4</Text>
            </TouchableOpacity>


            {/* Quiz5 */}
            </View>
            <View style={styles.container}>
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:5,text:Quiz5})}
            >
            <Text style={styles.textstyle} >Quiz 5</Text>
            </TouchableOpacity>

            {/* Quiz6 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:6,text:Quiz6})}
            >
            <Text style={styles.textstyle} >Quiz 6</Text>
            </TouchableOpacity>


            </View>
            <View style={styles.container}>
            {/* Quiz7 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:7,text:Quiz7})}
            >
            <Text style={styles.textstyle} >Quiz 7</Text>
            </TouchableOpacity>

            {/* Quiz8 */}
            <TouchableOpacity 
                style = {styles.buttonstyle}
                onPress={() => props.navigation.navigate("quizopen",{num:8,text:Quiz8})}
            >
            <Text style={styles.textstyle} >Quiz 8</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>

     
     
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',
      margin:20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonstyle:
    {
      margin:8,
      borderWidth: 3,
      borderRadius: 30,
      borderColor:'blue',
      height:110, 
      width:120,
      justifyContent: 'center', 
      textAlign: 'center',
    },
    textstyle:{
      fontSize:30,
      justifyContent: 'center',
      textAlign: 'center',
    }
});
