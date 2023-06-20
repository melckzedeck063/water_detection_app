import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const TermsAndConditionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.heading}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to the Water Purity Detection System. These terms and
          conditions govern your use of the app and the services provided by
          our system. By using our app, you agree to comply with and be bound
          by these terms and conditions.
        </Text>

        <Text style={styles.heading}>2. User Responsibilities</Text>
        <Text style={styles.text}>
          As a user of our system, you agree to use the app responsibly and
          comply with all applicable laws and regulations. You are responsible
          for maintaining the confidentiality of your account and ensuring that
          your device is secure.
        </Text>

        <Text style={styles.heading}>3. Data Privacy</Text>
        <Text style={styles.text}>
          We take your data privacy seriously. By using our app, you agree to
          our privacy policy, which outlines how we collect, use, and store
          your data. We will never share your personal information with third
          parties without your consent.
        </Text>

        <Text style={styles.heading}>4. Intellectual Property</Text>
        <Text style={styles.text}>
          The Water Purity Detection System and all related intellectual
          property rights belong to our company. You may not copy, modify,
          distribute, or reproduce any part of the app without our prior
          written consent.
        </Text>

        <Text style={styles.heading}>5. Limitation of Liability</Text>
        <Text style={styles.text}>
          We strive to provide accurate and reliable information through our
          app. However, we do not guarantee the accuracy, completeness, or
          reliability of the information. We are not liable for any damages or
          losses resulting from your use of the app.
        </Text>

        <Text style={styles.heading}>6. Changes to Terms and Conditions</Text>
        <Text style={styles.text}>
          We reserve the right to modify or update these terms and conditions at
          any time. Any changes will be effective immediately upon posting on
          the app. It is your responsibility to review the terms and conditions
          periodically.
        </Text>

        <Text style={styles.footerText}>
          By using the Water Purity Detection System, you agree to these terms
          and conditions.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  contentContainer: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default TermsAndConditionsScreen;
