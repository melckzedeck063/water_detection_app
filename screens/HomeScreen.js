import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import   {useResponsiveHeight, useResponsiveWidth} from 'react-native-responsive-dimensions'

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(()  =>  {
        navigation.setOptions({
            headerShown : false
        })
    })
  return (
      <>
        <View className={``} > 
        <LinearGradient colors={['#3498DB', 'white']} className={`h-full`} >
        <SafeAreaView  />
            <View className={`h-full`}>
              <View style={style.card}  className={`w-10/12 h-32 rounded-lg`} >
                 <Text className={`text-center font-bold py-2 text-sky-600`}>HomeScreen</Text>
              </View>

              <View style={style.card}  className={`mt-4`}>
                 <View  style={{height  : useResponsiveHeight(45)}} ></View>
              </View>
             </View>
        </LinearGradient>
        </View>
    </>
  )
}

export default HomeScreen

const style = StyleSheet.create({
    card: {
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '90%',
      alignSelf  : 'center'
     }
  })
  