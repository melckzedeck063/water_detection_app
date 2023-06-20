import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { useDispatch, useSelector } from 'react-redux';
import { getSignal } from '../store/actions/signal_actions';
import { useRoute } from '@react-navigation/native';

const ProgressRingScreen = () => {
  const [data, setData] = useState([]);
  const [reload, setReload] =  useState(0);
  const  {params : {datas}} = useRoute()

  console.log(datas)

  setTimeout(() => {
    if(reload < 7){
      setReload(reload => reload +1)
    }
  }, 1000);

  

  useEffect(() => {
    // Fetch data from the server and update the data state variable
    // You can implement your own logic here

    // Example data for demonstration
    const measurementData = [
      { label: 'Temperature', value: 25, unit: '°C', color: '#FF5722' },
      { label: 'pH', value: 7.2, unit: '', color: '#2196F3' },
      { label: 'Turbidity', value: 20, unit: 'NTU', color: '#9C27B0' },
      { label: 'Water Level', value: 85, unit: '%', color: '#E91E63' },
      { label: 'Percentage Purity', value: 90, unit: '%', color: '#4CAF50' },
    ];


    if(datas){
      measurementData.forEach((data) => {
        switch (data.label) {
          case 'Temperature':
            data.value = parseFloat(datas.temperature);
            break;
          case 'pH':
            data.value = parseFloat(datas.PH);
            break;
          case 'Turbidity':
            data.value = parseFloat(datas.turbidity);
            break;
          case 'Water Level':
            data.value = parseFloat(datas.water_level);
            break;
          case 'Percentage Purity':
            data.value = parseInt(datas.purity);
            break;
          default:
            break;
        }
      });
      
      console.log(measurementData);
    }

    setData(measurementData);
  }, []);

 

  const renderMeasurementRows = () => {
    const rows = [];
    const rowCount = Math.ceil(data.length / 2);

    for (let i = 0; i < rowCount; i++) {
      const startIndex = i * 2;
      const endIndex = startIndex + 1;

      const row = (
        <View style={styles.rowContainer} key={i}>
          {data[startIndex] && renderMeasurement(data[startIndex])}
          {data[endIndex] && renderMeasurement(data[endIndex])}
        </View>
      );

      rows.push(row);
    }

    return rows;
  };

  const renderMeasurement = (item) => {
    return (
      <View style={styles.measurementContainer} key={item.label}>
        <ProgressCircle 
          percent={item.value}
          radius={70}
          borderWidth={10}
          color={item.color}
          shadowColor="#D9D9D9"
          bgColor="#fff"
        >
          <Text style={styles.measurementValue}>{item.value}</Text>
          <Text style={styles.measurementUnit}>{item.unit}</Text>
        </ProgressCircle>
        <Text style={styles.measurementLabel}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Water Purity Measurements</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderMeasurementRows()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal : 12
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginHorizontal  : 12
  },
  measurementContainer: {
    alignItems: 'center',
  },
  measurementValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  measurementUnit: {
    fontSize: 16,
    marginTop: 4,
    color: '#000',
  },
  measurementLabel: {
    fontSize: 16,
    marginTop: 8,
    color: '#000',
    textAlign: 'center',
  },
});

export default ProgressRingScreen;
