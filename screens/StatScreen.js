import React, { useState,useLayoutEffect } from 'react';
import { View, StyleSheet, Dimensions, useWindowDimensions, Text, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { BarChart } from 'react-native-chart-kit';
// import { useWindowDimensions } from 'react-native-wind';

const screen = Dimensions.get('screen');
// import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions'


const data = {
  labels: ['Temp', 'PH Value', 'Purity', 'Level', 'Particles', 'Jun'],
  datasets: [
    {
      data: [
        Math.floor(Math.random()*100), 
        Math.floor( Math.random()*100), 
        Math.floor(Math.random()*100),
        Math.floor(Math.random()*100),
        Math.floor(Math.random()*100),
        Math.floor(Math.random()*100)
      ],
    },
  ],
};

const StatScreen = () => {

  const [progressData, setProgressData] = useState([
    (Math.random()*1), (Math.random()*1), (Math.random()*1), (Math.random()*1)
  ]);


  setTimeout(() => {
    data[0] = Math.random()*100,
    data[1]= Math.random()*100,
    data[2] = Math.random()*100,
     data[3] = Math.random()*100,
     data[4] = Math.random()*100,
     data[5] = Math.random()*100
   
}, 60000);

  const navigation  =   useNavigation();

  const {width, height} = useWindowDimensions()
  const [selectedDate, setSelectedDate] = useState('');

  // Data for the bar graph
  

  // Styling options for the bar graph
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  // Callback function to handle date selection in the calendar
  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };


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
    <View className={'py-2'}>
     {/* <SafeAreaView  /> */}
     <View  className={`w-full h-full bg-slate-100 my-4`}>
        <View style={[styles.card, styles.dateContainer]} className='rounded-xl p-1'>
          <Calendar onDayPress={handleDateSelect} />
        {selectedDate !== '' && (
          <View  className={"my-2"}>
            <Text className={`text-center text-sky-500 font-bold text-lg ${Platform.select({android  : 'text-sm'})}`}>
              Selected Date: {selectedDate}
            </Text>
          </View>
        )}
        </View>
      <View style={[styles.card, styles.chartContainer]} className={`my-4 rounded-xl p-1 pt-2`}>
        <BarChart
          data={data}
          width={width * 0.9}
          height={200}
          chartConfig={chartConfig}
        />
      </View>
    </View>
    </View>
  );
};

export default StatScreen

const styles = StyleSheet.create({
  card: {
    elevation : 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset :{width : 0, height : 2} ,
    shadowOpacity: 0.25,
    shadowRadius : 8,
    width  : '92%',
    alignSelf  : 'center',
   },

  chartContainer: {
    height : responsiveHeight(30)
  },
  dateContainer  : {
    height : responsiveHeight(45)
  },
  
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

