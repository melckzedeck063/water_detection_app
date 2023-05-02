import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import   {useResponsiveHeight, useResponsiveWidth, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import { useWindowDimensions } from 'react-native'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'
import { ProgressChart } from 'react-native-chart-kit'


const data = {
  labels: ["Temp", "PH", "purity"], // optional
  data: [0.4, 0.6, 0.8]
};


const HomeScreen = () => {

    const navigation = useNavigation();
    const  {height, width} =  useWindowDimensions();

    const [currentTime, setCurrentTime] = useState(new Date());
    const [progressData, setProgressData] = useState([
      (Math.random()*1), (Math.random()*1), (Math.random()*1), (Math.random()*1)
    ]);

    setTimeout(() => {
       setProgressData( progressData => progressData =[
         Math.random()*1,
         Math.random()*1,
         Math.random()*1,
         Math.random()*1,
        ]
       )
    }, 60000);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
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
            <View className={`h-full -mt-1 ${Platform.select({android :  'pt-6'})}`}>
              <View style={style.card}  className={`w-10/12 h-24 rounded-lg px-4 py-4`} >
                <View className="my-2">
                   <Text className={`text-sky-500 font-bold text-center text-xl ${Platform.select({android : 'text-lg'})}`}> Today Current Measurement </Text>
                </View>
       <View style={{alignSelf : 'center'}} className="w-8/12">
        <View  className="flex flex-row justify-between">
        <Text className={`text-center font-medium text-sky-500 text-lg ${Platform.select({android : 'text-sm'})}`}>
           {currentTime.toDateString()}
        </Text>
        <Text className={`text-center font-medium text-sky-500 text-lg ${Platform.select({android : 'text-sm'})}`}>
          {currentTime.toTimeString().split(' ')[0]}
        </Text>
      </View>
        </View>         
              </View>


              <View style={style.card}  className={`mt-3 rounded-lg`}>
                 <View  style={{height  : responsiveHeight(69)}}>
                  <View className={`py-1`} ></View>
                    {/* <View style={{alignSelf :'center', height :'86%', width : '86%'}} className={`rounded-full h-48 w-48 mt-6 p-1 bg-slate-200`}>
                        <View style={{ height  : '92%', width : '92%', alignSelf : 'center',}} className={`bg-sky-500 p-2 rounded-full mt-3`} >
                           <View style={{height :  '91%', width : '91%', alignSelf : 'center'}} className={`bg-white rounded-full mt-3.5 py-20 ${Platform.select({android : "py-16"})}`}>
                             <Text className={`text-center text-sky-600 font-medium`}>Purity</Text>
                             <Text className={`text-center text-sky-600 font-bold my-4 text-2xl ${Platform.select({android : 'text-xl'})}`}>78.787 %</Text>
                             <Text className={`text-center text-sky-600 font-medium`}>Clean and Safe</Text>
                           </View>
                        </View>
                    </View> */}

                    <View style={{alignSelf : 'center', alignItems : 'center'}} className="my-4">
                    

               <View style={style.progressContainer} className='-mt-4'>
                  <ProgressChart
                         data={{
                           data: progressData
                         }}
                         width={responsiveWidth(80)}
                         height={responsiveHeight(45)}
                         hideLegend={true}
                         legendPosition="bottom"
                         chartConfig={{
                           backgroundColor: '#FFF',
                           backgroundGradientFrom: '#FFF',
                           backgroundGradientTo: '#FFF',
                           color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                           strokeWidth: 2,
                           barPercentage: 0.5,
                           decimalPlaces: 0,
                         }}
                       />
        
                </View>

                    <View className={``}>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium  text-xl ${Platform.select({android : 'text-lg'})}`}>Temperature</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`${Math.floor((progressData[0]) * 100)}'C`}</Text>
                      </View>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium  text-xl ${Platform.select({android : 'text-lg'})}`}>PH Value</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`${Math.floor((progressData[1]) * 100)} %`}</Text>
                      </View>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium  text-xl ${Platform.select({android : 'text-lg'})}`}>% Purity</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`${Math.floor((progressData[2]) * 100)} %`}</Text>
                      </View>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium  text-xl ${Platform.select({android : 'text-lg'})}`}>Water level</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`${Math.floor((progressData[3])* 100)} %`}</Text>
                      </View>
                    </View>
                    </View>

                    <View className={`my-2`}>
                        <TouchableOpacity style={{alignSelf  : 'center'}} className={`px-3 py-1 w-8/12`}>
                            <Text className={`text-center font-medium text-sky-600 text-xl ${Platform.select({android : 'text-lg'})}`}>More Details  <AntDesign name="caretright" size={18} color="#3498DB" /> </Text>
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

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 155, 255, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.7,
  useShadowColorFromDataset: false, // optional,
  labelColor: (opacity = 1) => `rgba(25, 75, 255, ${opacity})`
};

const style = StyleSheet.create({
    card: {
      elevation : 4,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset :{width : 0, height : 2} ,
      shadowOpacity: 0.25,
      shadowRadius : 8,
      width  : '98%',
      alignSelf  : 'center',
     },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    chartContainer: {
      alignItems: 'center',
    },
    
  })
  