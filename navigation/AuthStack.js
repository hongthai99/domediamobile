import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation-stack'
import SignupScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';

import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

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

    return (
        <Stack.Navigator initialRouteName={routeName}>
            
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
                component={Home}
                options={{header:()=> null}}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;