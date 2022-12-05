import * as React from 'react';
import StackNav from './Stack';
import { firebase } from '../firebaseConfig';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function Drawernavi() {

  const CustomDrawer = (props) => (
    
    <DrawerContentScrollView {...props}>
      {/* 마이페이지로 가는 버튼*/}
      <DrawerItem label = "Mypage"
      onPress={()=>  props.navigation.navigate("quizselect")}>
      </DrawerItem>

      { /* 퀴즈 현황 볼 수 있는 버튼*/}
      <DrawerItem label = "Quiz Status"
      onPress={()=>  props.navigation.navigate("quizselect")}>
      </DrawerItem>

      {/* 로그아웃 하는 버튼*/}
      <DrawerItem label = "Logout"
      onPress={()=> Logout({...props})}>
      </DrawerItem>
      
      {/* 비밀번호 변경 하는 버튼*/}
      <DrawerItem label = "Change PW"
      onPress={()=> changePassword()}>
      </DrawerItem>
    </DrawerContentScrollView> 
    )

    
    const Logout = (props) => {
      firebase.auth().signOut()
      props.navigation.navigate("Login")
     
    }
    const changePassword = () => {
      firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert('Password reset email sent!')
      })
      .catch(error => {
        alert(error)
      })
    }
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}></CustomDrawer> 
   }
    screenOptions={{drawerPosition:'left',drawerType:'slide'}}
    
    >
    <Drawer.Screen name="Questions and Answer" component={StackNav}
      options = {{title:'',headershown:'false'
    }}
    ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

