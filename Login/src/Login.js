import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../components/config';

const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const loginUser = async (email,password) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error){
          alert(error)
        }
    }

    // 비밀번호 찾기
    const forgetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Password reset email sent!')
        }).catch((error) => {
          alert(error)
        })
    }

    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:26,}}>
          icon
        </Text>
        <View style={{marginTop:40}}>
          <TextInput style={styles.textInput} 
            placeholder="Email" 
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"   //자동 대문자화 X
            keyboardType="email-address" //열 키보드를 이메일 타입으로(@ , .com)추가
          />
          <TextInput style={styles.textInput} 
            placeholder="Password" 
            onChangeText={(password)=> setPassword(password)}
            autoCapitalize="none"   //자동 대문자화 X
            secureTextEntry={true}  //텍스트 입력이 입력된 텍스트를 가린다.
          />
        </View>
        <TouchableOpacity
            onPress={()=>loginUser(email,password)}
            style={styles.button}
        >
          <Text style={{fontWeight:'bold', fontSize:22}}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={()=>navigation.navigate('Registration')}
          style={{marginTop:20,}}
        >
          <Text style={{fontWeight:'bold', fontSize:16}}> 
            Don't have an account? Register Now  
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{forgetPassword()}}
          style={{marginTop:20,}}
        >
          <Text style={{fontSize:16, fontweight:'bold'}}>
            Forget Password?
          </Text>
        </TouchableOpacity>
      </View>
    )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex:1,  
    alignItems:'center',
    marginTop:100,
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