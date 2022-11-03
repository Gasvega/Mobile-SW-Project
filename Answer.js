import { CardStyleInterpolators } from '@react-navigation/stack';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Textinput} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Question = () => {
    const [myTextInput, setMyTextInput] = useState ("")
    const onChangeInput = (event) => {
        console.log("event", event)
        setMyTextInput(event)
    }
    return (
        <View style = {styles.mainView}>
            <TextInput
            style = {styles.input}
            value = {myTextInput}
            onChangeText = {onChangeInput}
            multiline = {true}
            ></TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    mainView:{
        wifth:'100%'
    },
    input:{
        width: '99%',
        height: '95%',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor:"white",
        marginTop:10,
        fontsize:19,
        padding:10,
        borderColor: "#86E57F",
        borderStyle: "dashed",
        borderWidth: 5,
    }
})

export default Question;