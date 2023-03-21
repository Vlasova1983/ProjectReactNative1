import * as React from "react";
import { AntDesign} from "@expo/vector-icons";
import { View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';

import CreatePosteScreen from './Screens/mainScreen/CreatePostsScreen';
import  PostScreen from './Screens/mainScreen/PostScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';
// import ComentScreen from './Screens/mainScreen/ComentsScreen';


const MainStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth)=>{ 
    if (!isAuth){
        return (    
            <MainStack.Navigator  initialRouteName="Register">        
                <MainStack.Screen 
                  options={{headerShown: false}} 
                  name="Register" 
                  component={RegistrationScreen}          
                />          
                <MainStack.Screen
                  options={{headerShown: false}}
                  name="Login" 
                  component={LoginScreen}          
                />           
            </MainStack.Navigator>     
        )
    } 
    return (  
        <MainTab.Navigator    
          screenOptions={({ route }) => ({        
            tabBarIcon: () => {            
              if (route.name === "Публикации") {           
                return  <AntDesign name="appstore-o" size={24} color={'#BDBDBD'}/>         
              } 
              else if (route.name === "Создать публикацию") {            
                return (
                 <View 
                 style=
                 {{ height: 40,
                  width:70, 
                  backgroundColor:"#FF6C00",
                  borderRadius:20, 
                  justifyContent: "center",
                  alignItems: "center", 
                  color:'#fff'             
                  }}>
                  <AntDesign name="plus" size={24} color={'#FFFFFF'}/> 
                </View>
                )
              } 
              else if (route.name === "Профайл") {          
                return <AntDesign name="user" size={24} color={'#BDBDBD'}  />
              } 
            },        
          })}          
        >    
          <MainTab.Screen name="Публикации" component={PostScreen} options={{title: ""}}/>      
          <MainTab.Screen name="Создать публикацию" component={CreatePosteScreen} options={{title: ""}}/>
          <MainTab.Screen name="Профайл" component={ProfileScreen} options={ {title: ""}}/>  
          {/* <MainTab.Screen  name="ComentScreen" component={ComentScreen}   options={{title: ""}}/>                           */}
        </MainTab.Navigator>   
    );
}
    