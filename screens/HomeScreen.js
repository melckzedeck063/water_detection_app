import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import   {useResponsiveHeight, useResponsiveWidth} from 'react-native-responsive-dimensions'
import { useWindowDimensions } from 'react-native'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'

const HomeScreen = () => {

    const navigation = useNavigation();
    const  {height, width} =  useWindowDimensions();
    // console.log(width)

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
            <View className={`h-full ${Platform.select({android :  'pt-6'})}`}>
              <View style={style.card}  className={`w-10/12 h-24 rounded-lg flex flex-row justify-between px-4 py-4`} >
                <View className={`flex flex-row space-x-2`}>
                <Text className="mt-3">  <AntDesign name="caretdown" size={24}  color="#3498DB" className={`mt-3`} /> </Text>
                <View>
                    <Text className={`text-center font-bold py-2 text-sky-600 mt-2`}>HomeScreen</Text>
                    <Text className={`text-center font-bold py-2 text-sky-600 -mt-3`}>HomeScreen</Text>
                </View>
                </View>
                 <View className={`flex-row flex justify-between space-x-1`}>
                    <Text className={`mt-3`}> <AntDesign name="caretleft" size={24} color="#3498DB" /> </Text>
                    <View className={`border-l-2 h-10 border-sky-600 mt-1`}></View>
                    <Text className={`mt-3`}> <AntDesign name="caretright" size={24} color="#3498DB" /> </Text>
                 </View>
              </View>

              <View style={style.card}  className={`mt-4 rounded-lg`}>
                 <View  style={{height  : '70%'}}>
                  <View className={`py-6`} ></View>
                    <View style={{alignSelf :'center', height :'86%', width : '86%'}} className={`rounded-full h-48 w-48 mt-6 p-1 bg-slate-200`}>
                        <View style={{ height  : '92%', width : '92%', alignSelf : 'center',}} className={`bg-sky-500 p-2 rounded-full mt-3`} >
                           <View style={{height :  '91%', width : '91%', alignSelf : 'center'}} className={`bg-white rounded-full mt-3.5 py-20 ${Platform.select({android : "py-16"})}`}>
                             <Text className={`text-center text-sky-600 font-medium`}>Purity</Text>
                             <Text className={`text-center text-sky-600 font-bold my-4 text-2xl ${Platform.select({android : 'text-xl'})}`}>78.787 %</Text>
                             <Text className={`text-center text-sky-600 font-medium`}>Clean and Safe</Text>
                           </View>
                        </View>
                    </View>
                    <View className={`my-6`}>
                        <TouchableOpacity style={{alignSelf  : 'center'}} className={`px-3 py-1 w-8/12`}>
                            <Text className={`text-center font-medium text-sky-600 text-xl ${Platform.select({android : 'text-lg'})}`}>More Details  <FontAwesome name="arrow-circle-right" size={24} color="#3498DB" /></Text>
                        </TouchableOpacity>
                    </View>
                 </View>
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
      width  : '91%',
      alignSelf  : 'center',
     }
  })
  