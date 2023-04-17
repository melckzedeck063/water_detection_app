import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

import {BarChart, LineChart} from 'react-native-chart-kit'
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions'

const data = {
  labels: ["Temp", "PH Value", "Purity", "Level", "Particles", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};

const HistoryScreen = () => {

  const navigation =    useNavigation();

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
      <LinearGradient colors={['#fff', 'white']} className={`h-full`} >
         <View className={`bg-slate-100`}>
           <Text className={`font-bold text-sky-500 text-xl text-center py-6 ${Platform.select({android : 'text-lg'})}`} >History  Screen</Text>

         </View>
         <View style={style.card} className={'rounded-lg'} >
         <LineChart
  data={data}
  width={responsiveWidth(100)}
  height={responsiveHeight(40)}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>

    <View>
                  <View style={{alignSelf : 'center'}} className={`w-10/12 mt-3`}>
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
         </View>
      </LinearGradient>
    </View>
  )
}

export default HistoryScreen

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 95, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const style = StyleSheet.create({
  card: {
    elevation : 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset :{width : 0, height : 2} ,
    shadowOpacity: 0.25,
    shadowRadius : 8,
    width  : '94%',
    height : responsiveHeight(60),
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
