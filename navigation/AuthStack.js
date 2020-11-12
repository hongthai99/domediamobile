import React, {useState, useEffect, useContext, useReducer} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation-stack'
import SignupScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabScreen from '../screens/MainTabScreen';
import AsyncStorage from '@react-native-community/async-storage';
// get user
// import {UserContext} from '../App'
//
// Hí cô chỗ này là navigation :PPPP 
const Stack = createStackNavigator();
// import {UserContext} from './Routes';
// hicoo@domedia.com
// Hí cô em chưa làm cái profile page cô ạ.. :PPPPP 
// api hơi chậm nữa cô :P 
// chắc do em sài free của heroku với môngo chận rè à cô ơi.... :PPPPP 


const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    // const {state, dispatch} = useContext(UserContext)

    // useEffect(() => {
    //     const user = JSON.parse(AsyncStorage.getItem("user"))
    //     if(user){
    //       dispatch({type:"USER", payload:user})
    //       //history.push('/')
    //     }else{
    //       navigation.navigate('Login')
    //     }
    //     },[])
    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null){
                AsyncStorage.setItem('AlreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, []); // add some er handling, also you can simply do is set1launch null

    if (isFirstLaunch === null){
        return null;
    } else if (isFirstLaunch==true){
        routeName = 'Login';
    } else {
        routeName = 'HomeScreen';
    }
   
        
    // const isLoggedIn = true;
    return (
        <Stack.Navigator initialRouteName={routeName} >
            <Stack.Screen
                name = "Login"
                component={LoginScreen}
                options={{header:() => null}}   
            />
            <Stack.Screen
                name="SignUp"
                component={SignupScreen}
            />
            <Stack.Screen 
                name = "HomeScreen"
                component={MainTabScreen}
                options={{header:()=> null}}
            />
        </Stack.Navigator>  
    //   <Stack.Navigator>
    //     {isLoggedIn ? (
    //       <>
    //         <Stack.Screen
    //           name = "Login"
    //           component={LoginScreen}
    //           options={{header:() => null}}
    //         />
    //         <Stack.Screen
    //           name="SignUp"
    //           component={SignupScreen}
    //         />
    //       </>
    //     ) : (
    //       <Stack.Screen
    //       name = "HomeScreen"
    //       component={MainTabScreen}
    //       options={{header:()=> null}}
    //       />
    //     )}
    //   </Stack.Navigator>

    )
}

export default AuthStack;