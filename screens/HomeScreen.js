import { useNavigation } from '@react-navigation/native';
import React,{useEffect,useLayoutEffect,useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getSignal } from '../store/actions/signal_actions';

const HomeScreen = () => {
  const navigation =  useNavigation();
  const [reload, setReload] =  useState(0);
  const dispatch  =  useDispatch();

  setTimeout(() => {
    if(reload < 7){
      setReload(reload => reload +1)
    }
  }, 1000);

  const signals =  useSelector(state =>state.signal);

  // console.log(signals.current_signal)

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

  const handleStartDetection = () => {
    dispatch(  getSignal() )
    
    setTimeout(() => {
      datas  = signals.current_signal.data.data[0];
      // console.log(datas)
      setTimeout(() => {
        navigation.navigate('Detect', {datas})
      }, 1500);
    }, 1500);
  };

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={require('../assets/images/image.jpg')}
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <Text style={styles.appTitle} className="text-sky-600" >Water Purity Detection</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Welcome to the Water Purity Detection app! This app helps you measure and monitor the purity of water based on various parameters.
        </Text>
        <View style={styles.measurementContainer}>
          <Text style={styles.measurementTitle} className="text-sky-600">Measurements</Text>
          <View style={styles.measurementItem}>
            <Text style={styles.measurementLabel} className="text-sky-600">1. Temperature</Text>
            <Text style={styles.measurementDescription}>
              The temperature of the water sample, measured in Celsius (°C). Temperature can affect the solubility of impurities and chemical reactions within the water.
            </Text>
          </View>
          <View style={styles.measurementItem}>
            <Text style={styles.measurementLabel} className="text-sky-600">2. pH</Text>
            <Text style={styles.measurementDescription}>
              The pH level indicates the acidity or alkalinity of the water sample. It is measured on a scale of 0 to 14, where pH 7 is considered neutral. Deviations from the neutral pH can indicate the presence of acidic or alkaline substances.
            </Text>
          </View>
          <View style={styles.measurementItem}>
            <Text style={styles.measurementLabel} className="text-sky-600">3. Turbidity</Text>
            <Text style={styles.measurementDescription}>
              Turbidity refers to the clarity or cloudiness of the water caused by suspended particles. It is measured in Nephelometric Turbidity Units (NTU). Higher turbidity values can indicate the presence of contaminants or sediments.
            </Text>
          </View>
          <View style={styles.measurementItem}>
            <Text style={styles.measurementLabel} className="text-sky-600">4. Water Level</Text>
            <Text style={styles.measurementDescription}>
              The water level measurement provides information about the quantity of water in the container or reservoir. It helps assess the overall volume and usage of water.
            </Text>
          </View>
          <View style={styles.measurementItem}>
            <Text style={styles.measurementLabel} className="text-sky-600">5. Percentage Purity</Text>
            <Text style={styles.measurementDescription}>
              The percentage purity indicates the overall purity level of the water sample, calculated based on the combined measurements and analysis of the other parameters.
            </Text>
          </View>
        </View>

         <View>
         <TouchableOpacity style={styles.button} onPress={handleStartDetection}>
          <Text style={styles.buttonText} className="text-white font-bold text-center text-sm">Start Detection</Text>
        </TouchableOpacity>
         </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  logo: {
    width: 150,
    height: 150,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    marginTop: 32,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  measurementContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  measurementTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    width: '80%',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignSelf : 'center'
  },
  measurementItem: {
    marginBottom: 16,
  },
  measurementLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  measurementDescription: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default HomeScreen;
