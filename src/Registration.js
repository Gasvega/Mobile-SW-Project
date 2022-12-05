// 회원가입
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { firebase} from '../firebaseConfig';

const Registration = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

    const registerUser = async (email,password, firstName, lastName) => {
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
          firebase.auth().currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url:'http://mobilesw-f6f9f.firebaseapp.com',
           })
          .then(() => {
                alert('Verification email sent')
            }).catch((error) => { 
              alert(error.message)
            })
            .then(() => {
              firebase.firestore().collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                  firstName,
                  lastName,
                  email,

                  quiz1_A : 0,
                  quiz1_B : 0,
                  quiz1_C : 0,
                  
                  quiz2_A : 0,
                  quiz2_B : 0,
                  quiz2_C : 0,
                  
                  quiz3_A : 0,
                  quiz3_B : 0,
                  quiz3_C : 0,
                 
                  quiz4_A : 0,
                  quiz4_B : 0,
                  quiz4_C : 0,
                 
                  quiz5_A : 0,
                  quiz5_B : 0,
                  quiz5_C : 0,
                 
                  quiz6_A : 0,
                  quiz6_B : 0,
                  quiz6_C : 0,
                
                  quiz7_A : 0,
                  quiz7_B : 0,
                  quiz7_C : 0,
                  
                  quiz8_A : 0,
                  quiz8_B : 0,
                  quiz8_C : 0,
                  
              })
            })
            .catch((error) => {
              alert(error.message) 
          })

          .then(() => {
            props.navigation.navigate('Login')
        }).catch((error) => { 
          alert(error.message)
        })
        })
        .catch((error) => {
            alert(error.message)
        })
    }


  return (
    <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:23,}}>
          Register Here!
        </Text>
        <View style={{marginTop:40}}>
          <TextInput style={styles.textInput} 
              placeholder="First Name" 
              onChangeText={(firstName) => setFirstName(firstName)}
              autoCorrect={false}
          />
          <TextInput style={styles.textInput} 
            placeholder="Last Name" 
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
          />
          <TextInput style={styles.textInput} 
            placeholder="Email" 
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"  //자동 대문자화 X
            autoCorrect={false}
            keyboardType="email-address" //열 키보드를 이메일 타입으로(@ ,.com)추가
          />
          <TextInput style={styles.textInput} 
            placeholder="Password" 
            onChangeText={(password)=> setPassword(password)}
            autoCapitalize="none"  //자동 대문자화 X
            autoCorrect={false}
            secureTextEntry={true}  //텍스트 입력이 입력된 텍스트를 가린다.
          />
        </View>
        <TouchableOpacity
            onPress={()=>registerUser(email,password, firstName, lastName)}
            style={styles.button}
        >
          <Text style={{fontWeight:'bold', fontSize:22}}>Register</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Registration

const styles = StyleSheet.create({
  container: {
    flex:1,  
    alignItems:'center',
    marginTop:55,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom:10,
    width:400,
    fontSize: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop:50,
    height:70,
    width:250,
    backgroundColor:'#026efd',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
  }
});