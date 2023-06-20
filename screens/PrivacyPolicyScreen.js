import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.heading}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to the Privacy Policy of the Water Purity Detection System.
          This policy explains how we collect, use, and protect your personal
          information when you use our app. By using our app, you consent to the
          practices outlined in this policy.
        </Text>

        <Text style={styles.heading}>2. Information Collection</Text>
        <Text style={styles.text}>
          We collect certain personal information when you use our app, such as
          your name, contact details, and measurement data. This information is
          necessary to provide our services and ensure the accuracy of the
          measurements.
        </Text>

        <Text style={styles.heading}>3. Information Usage</Text>
        <Text style={styles.text}>
          We use the collected information to provide and improve our services,
          personalize your experience, and communicate with you. We may also
          use the data for research and analytical purposes while ensuring the
          confidentiality of personal information.
        </Text>

        <Text style={styles.heading}>4. Information Sharing</Text>
        <Text style={styles.text}>
          We do not share your personal information with third parties unless
          required by law or with your explicit consent. We may share
          non-personally identifiable information for statistical or marketing
          purposes.
        </Text>

        <Text style={styles.heading}>5. Data Security</Text>
        <Text style={styles.text}>
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, alteration, or
          disclosure. However, no method of transmission over the internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </Text>

        <Text style={styles.heading}>6. Children's Privacy</Text>
        <Text style={styles.text}>
          Our app is not intended for children under the age of 13. We do not
          knowingly collect personal information from children. If you believe
          that we have inadvertently collected information from a child, please
          contact us to remove the information.
        </Text>

        <Text style={styles.heading}>7. Changes to Privacy Policy</Text>
        <Text style={styles.text}>
          We reserve the right to modify or update this Privacy Policy at any
          time. Any changes will be effective immediately upon posting on the
          app. It is your responsibility to review the Privacy Policy
          periodically.
        </Text>

        <Text style={styles.footerText}>
          By using the Water Purity Detection System, you agree to this Privacy
          Policy.
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
    marginTop: 24,
  },
});

export default PrivacyPolicyScreen;
