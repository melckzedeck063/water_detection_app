import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import   {useResponsiveHeight, useResponsiveWidth, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'
import { useWindowDimensions } from 'react-native'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'
import {
  ProgressChart
} from 'react-native-chart-kit'


const data = {
  labels: ["Temp", "PH", "purity"], // optional
  data: [0.4, 0.6, 0.8]
};


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
            <View className={`h-full -mt-1 ${Platform.select({android :  'pt-6'})}`}>
              <View style={style.card}  className={`w-10/12 h-24 rounded-lg flex flex-row justify-between px-4 py-4`} >
                <View className={`flex flex-row space-x-2`}>
                  <TouchableOpacity className="">
                    <Text className="mt-3">  <AntDesign name="caretdown" size={24}  color="#3498DB" className={`mt-3`} /> </Text>
                  </TouchableOpacity>
                <View>
                    <Text className={`text-center font-bold py-2 text-sky-600 mt-2`}>HomeScreen</Text>
                    <Text className={`text-center font-bold py-2 text-sky-600 -mt-3`}>HomeScreen</Text>
                </View>
                </View>
                 <View className={`flex-row flex justify-between space-x-1`}>
                  <TouchableOpacity>
                    <Text className={`mt-3`}> <AntDesign name="caretleft" size={24} color="#3498DB" /> </Text>
                  </TouchableOpacity>
                    <View className={`border-l-2 h-10 border-sky-600 mt-1`}></View>
                  <TouchableOpacity>                   
                    <Text className={`mt-3`}> <AntDesign name="caretright" size={24} color="#3498DB" /> </Text>
                  </TouchableOpacity>
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
                    <ProgressChart
                        data={data}
                        width={responsiveWidth(90)}
                        height={responsiveHeight(45)}
                        strokeWidth={16}
                        radius={32}
                        chartConfig={chartConfig}
                        hideLegend={true}
                        legendPosition="bottom" // Position legend at the bottom
                       style={style.chart} // Apply custom styles to the chart
                    />
                    <View className={``}>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium text-xl ${Platform.select({android : 'text-lg'})}`}>Temperature</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`34 'C`}</Text>
                      </View>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium text-xl ${Platform.select({android : 'text-lg'})}`}>PH Value</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`34 %`}</Text>
                      </View>
                      <View className="flex-row flex justify-between space-x-4 my-1">
                          <Text className={`font-medium text-xl ${Platform.select({android : 'text-lg'})}`}>% Purity</Text>
                          <Text className={`text-sky-500 font-bold text-xl ${Platform.select({android : 'text-lg'})}`}>{`34 %`}</Text>
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
     chart: {
      borderRadius: 8, // Apply custom border radius to the chart
    },
    label: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
  })
  