import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
import CreateScreen from './CreateNewFeed';
import ProfileScreen from './Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const HomeStack = createStackNavigator();
const CreateStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: null }}
      barStyle={{ backgroundColor: '#252A36',height:70 }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateStackScreen}
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gamepad-round-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'},
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'},
    }}>
        <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
            title:'Home'
        }}
        />

    </HomeStack.Navigator>
);
const CreateStackScreen = ({navigation}) => (
    <CreateStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'},
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'}
    }}>
        <CreateStack.Screen
        name="Create"
        component={CreateScreen}
        options={{
            title:'New Post'
        }}
        />

    </CreateStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'},
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'}
    }}>
        <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title:'New Post'
        }}
        />

    </ProfileStack.Navigator>
);