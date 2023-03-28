import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomNavigator from './components/BottonNavigation';

const Stack =   createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
    <StatusBar  style='light' />
    
    <Provider store={store} >
    <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3498DB',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
       >
        <Stack.Screen  name='Welcome' component={WelcomeScreen}    />
        <Stack.Screen   name='Login' component={LoginScreen} 
            options={{ title: 'Sign In'}} 
         />
        <Stack.Screen   name='SignUp' component={SignUpScreen} 
                   options={{ title: 'Sign Up'}} 
        />
        <Stack.Screen name='HomeTab' component={BottomNavigator}
              screenOptions={{
                headerShown : false
              }}
        />
        <Stack.Screen  name='Home'  component={HomeScreen} 
           options={{title : 'Home'}}
        />
       </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}


export const  HomeTab = () => {
  return (
      <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#E34749' },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { backgroundColor: '#eee' },
        tabBarLabelStyle : {fontSize : 14, padding : 3},
        headerShown: false
        }}
      >
      
      </Tab.Navigator>

  )
}
