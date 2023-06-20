import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const HistoryScreen = () => {
  const [measurementHistory, setMeasurementHistory] = useState([]);

  useEffect(() => {
    // Fetch measurement history data from the server and update the measurementHistory state variable
    // You can implement your own logic here

    // Example measurement history data for demonstration
    const historyData = [
      {
        label: 'Temperature',
        unit: '°C',
        measurements: [
          { date: '2022-01-01', value: 24 },
          { date: '2022-01-02', value: 25 },
          { date: '2022-01-03', value: 26 },
          // ...more temperature measurements
        ],
      },
      {
        label: 'pH',
        unit: '',
        measurements: [
          { date: '2022-01-01', value: 7.2 },
          { date: '2022-01-02', value: 7.3 },
          { date: '2022-01-03', value: 7.1 },
          // ...more pH measurements
        ],
      },
      // ...more measurement categories
    ];

    setMeasurementHistory(historyData);
  }, []);

  const renderMeasurementCategory = (category) => {
    return (
      <View style={styles.categoryContainer} key={category.label}>
        <Text style={styles.categoryLabel}>{category.label}</Text>
        <View style={styles.measurementsContainer}>
          {category.measurements.map((measurement) => (
            <View style={styles.measurementItem} key={measurement.date}>
              <Text style={styles.measurementDate}>{measurement.date}</Text>
              <Text style={styles.measurementValue}>
                {measurement.value} {category.unit}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Measurement History</Text>

      {measurementHistory.map((category) =>
        renderMeasurementCategory(category)
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  measurementsContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
  },
  measurementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  measurementDate: {
    fontSize: 16,
    color: '#888',
  },
  measurementValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;
