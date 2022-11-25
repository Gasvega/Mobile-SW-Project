
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import StackNav from './Stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function Drawernavi() {

  
  
  const CustomDrawer = (props) => (
    
    <DrawerContentScrollView {...props}>
      <DrawerItem label = "quizselect"
      onPress={()=>  props.navigation.navigate("quizselect")}>
      </DrawerItem>

    </DrawerContentScrollView> 
    )
  return (
   
    <Drawer.Navigator 
   drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}
    screenOptions={{drawerPosition:'left',drawerType:'slide'}}
    initialRouteName='Quizselect'
    >
      <Drawer.Screen name="Questions and Answer" component={StackNav}
      options = {{title:'',headershown:'false'
}}
      ></Drawer.Screen>

    </Drawer.Navigator>
  
  );
}

