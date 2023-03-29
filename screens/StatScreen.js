import { View, Text, Platform } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
const StatScreen = () => {

  const navigation  =   useNavigation();

  useLayoutEffect(() =>  {
    navigation.setOptions({ 
      headerShown :  true,
      headerStyle: {
        backgroundColor: '#3498DB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  })

  return (
    <View>
      <LinearGradient colors={['#3498DB', 'white']} className={`h-full`} >
         <View className={``}>
           <Text className={`font-bold text-white text-xl text-center py-6 ${Platform.select({android : 'text-lg'})}`} >StatScreen</Text>

         </View>
      </LinearGradient>
    </View>
  )
}

export default StatScreen