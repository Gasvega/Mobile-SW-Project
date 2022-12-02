import * as React from 'react';
import StackNav from './Stack';

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
      onPress={()=>  props.navigation.navigate("quizselect")}>
      </DrawerItem>
      
    </DrawerContentScrollView> 
    )
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}
    screenOptions={{drawerPosition:'left',drawerType:'slide'}}
    initialRouteName='Quizselect'>
    <Drawer.Screen name="Questions and Answer" component={StackNav}
      options = {{title:'',headershown:'false'
    }}
    ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

