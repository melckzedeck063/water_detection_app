import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import StatScreen from '../screens/StatScreen';
import SettingScreen from '../screens/SettingScreen';
import { useLayoutEffect } from 'react';


const Tab = createBottomTabNavigator();

export default function BottomNavigator() {

    const navigation =  useNavigation();

    useLayoutEffect (() => {
        navigation.setOptions({
            headerShown : false
        })
    })
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                  
                />
              );
            } else if (route.name === 'History') {
              return (
                <FontAwesome
                  name={focused ? 'history' : 'history'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Settings') {
                return (
                  <Ionicons
                    name={focused ? 'settings' : 'settings-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
              else if(route.name==="Statistics"){
                return(
                  <Ionicons 
                     name={focused? 'stats-chart' : 'stats-chart-outline'}
                     size={size}
                     color={color}
                  />
                )
              }
          },
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: 'white',
          tabBarStyle  : {
            backgroundColor  :  '#3498DB'
          }
          
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        //   options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name='Statistics' component={StatScreen} options={{tabBarBadge : 1}} />
        <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}