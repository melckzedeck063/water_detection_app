import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { sendSignal } from '../store/actions/signal_actions';

const MeasurementScreen = () => {
  const [measurementData, setMeasurementData] = useState(null);
  const  dispatch =  useDispatch()

  const handleButtonClick = (measurement) => {
    // Simulating API call or data retrieval
    let data = {};


    switch (measurement) {
      case 'Pure Water':
        data = {
          temperature: 25,
          turbidity: 10,
          water_level: 81,
          PH: 7.12,
          purity: 96,
        };
        dispatch(sendSignal(data))
        break;
      case 'Acidic Water':
        data = {
          temperature: 28,
          turbidity: 5,
          water_level: 85,
          PH: 4.2,
          purity: 95,
        };
        break;
      case 'Usodo Water':
        data = {
          temperature: 23,
          turbidity: 15,
          water_level: 75,
          PH: 6.5,
          purity: 85,
        };
        break;
      case 'Basicity Water':
        data = {
          temperature: 27,
          turbidity: 12,
          water_level: 80,
          PH: 8.5,
          purity: 90,
        };
        break;
      case 'Sand + Water':
        data = {
          temperature: 30,
          turbidity: 25,
          water_level: 70,
          PH: 7.8,
          purity: 80,
        };
        break;
      case 'Particles':
        data = {
          temperature: 26,
          turbidity: 30,
          water_level: 65,
          PH: 7.2,
          purity: 75,
        };
        break;
      case 'Hot Water':
        data = {
          temperature: 40,
          turbidity: 8,
          water_level: 95,
          PH: 6.8,
          purity: 98,
        };
        break;
      case 'Mud Water':
        data = {
          temperature: 30,
          turbidity: 100,
          water_level: 50,
          PH: 8.0,
          purity: 50,
        };
        break;
      default:
        data = {};
        break;
    }

    // Update the state with the measurement data
    setMeasurementData(data);
  };

  const handlePureWater = (data)  => {
    dispatch( sendSignal(data))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Measured Content</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPureWater]}
          onPress={() => handleButtonClick('Pure Water')}
        >
          <Text style={styles.buttonText}>Pure Water</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonAcidicWater]}
          onPress={() => handleButtonClick('Acidic Water')}
        >
          <Text style={styles.buttonText}>Acidic Water</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonUsodoWater]}
          onPress={() => handleButtonClick('Usodo Water')}
        >
          <Text style={styles.buttonText}>Usodo Water</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonBasicityWater]}
          onPress={() => handleButtonClick('Basicity Water')}
        >
          <Text style={styles.buttonText}>Basicity Water</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonSandWater]}
          onPress={() => handleButtonClick('Sand + Water')}
        >
          <Text style={styles.buttonText}>Sand + Water</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonParticles]}
          onPress={() => handleButtonClick('Particles')}
        >
          <Text style={styles.buttonText}>Particles</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.buttonHotWater]}
          onPress={() => handleButtonClick('Hot Water')}
        >
          <Text style={styles.buttonText}>Hot Water</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonMudWater]}
          onPress={() => handleButtonClick('Mud Water')}
        >
          <Text style={styles.buttonText}>Mud Water</Text>
        </TouchableOpacity>
      </View>
      {measurementData && (
        <View style={styles.measurementData}>
          <Text style={styles.measurementTitle}>Measurement Data:</Text>
          <Text style={{fontSize : 18}}>Temperature: {measurementData.temperature}°C</Text>
          <Text style={{fontSize : 18}}>Turbidity: {measurementData.turbidity} NTU</Text>
          <Text style={{fontSize : 18}}>Water Level: {measurementData.water_level}%</Text>
          <Text style={{fontSize : 18}}>pH: {measurementData.PH}</Text>
          <Text style={{fontSize : 18}}>Percentage Purity: {measurementData.purity}%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    width: '45%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonPureWater: {
    backgroundColor: '#4CAF50',
  },
  buttonAcidicWater: {
    backgroundColor: '#F44336',
  },
  buttonUsodoWater: {
    backgroundColor: '#FF9800',
  },
  buttonBasicityWater: {
    backgroundColor: '#2196F3',
  },
  buttonSandWater: {
    backgroundColor: '#9C27B0',
  },
  buttonParticles: {
    backgroundColor: '#E91E63',
  },
  buttonHotWater: {
    backgroundColor: '#FF5722',
  },
  buttonMudWater: {
    backgroundColor: '#795548',
  },
  measurementData: {
    marginTop: 32,
  },
  measurementTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default MeasurementScreen;
