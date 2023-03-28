import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

import  image1 from '../assets/images/pexels-gabriel-peter-719396.jpg'
import image2 from '../assets/images/pexels-pixabay-416528.jpg'
import { useWindowDimensions } from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

const WelcomeScreen = () => {

    const navigation =  useNavigation();
    const {height, width} =  useWindowDimensions()
    // const users =   useSelector(state => state.user_reducer)
    // console.log(users);
    

    navigation.setOptions({
        headerShown : false
    })
  return (
    <>
  <LinearGradient colors={['#3498DB', 'transparent']} className="bg-slate-100 w-full h-full" style={{flex : 1}}>
      <View className="bg-slatee-100 w-full h-full" style={{flex : 1}}>
        <ImageBackground source={image1} resizeMode='cover'
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          imageStyle={{ opacity : 0.75}}
        >
            <View className="absolute inset-0 bg-slate-400 opacity-0"></View>

       
      <View className="relative">
        
          <View style={{alignSelf: 'center'}} className={`py-2 bg-sky-600 shadow-md px-2 rounded-xl absolute ${height < 450 ? 'top-3' : 'top-6'} ${width < 380 ? 'w-10/12' : 'w-9/12'}`}>
           <Text className={`text-xl font-bold text-white my-2 text-center ${ Platform.select({android : 'text-lg'})}`} > Water Tank Detection System </Text>
           <Text className={`my-2 text-sm text-left text-white px-3 ${Platform.select({android : 'text-xs'})}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore ad similique esse ut vitae </Text>
           
        
        <View className="mt-2 py-2" >
             <TouchableOpacity style={{alignSelf: 'center'}} className="rounded-lg px-2 py-1 bg-white hover:text-sky-300 w-9/12 mx-auto"
             onPress={() => navigation.navigate('Login') }
             >
                <Text className={`text-xl font-medium text-sky-600 text-center ${Platform.select({android : 'text-lg'})}`} >Get Started</Text>
             </TouchableOpacity>
        </View>
        
        </View>
        
            
      </View>
       {/* <Text className="text-blue-600 text-center" > Developed and maintained bt @Cotton </Text> */}
      </ImageBackground>
    </View>
    </LinearGradient>
    </>
  )
}

export default WelcomeScreen