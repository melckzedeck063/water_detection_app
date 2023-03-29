import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const SettingScreen = () => {
  const navigation   =  useNavigation();
  
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
           <Text className={`font-bold text-white text-xl text-center py-6 ${Platform.select({android : 'text-lg'})}`} >Setting  Screen</Text>

         </View>
      </LinearGradient>
    </View>
  )
}

export default SettingScreen