import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PasswordSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Password reset successfully!</Text>
      <Text style={styles.infoText}>
        Your password has been successfully reset. Click below to log in with your new credentials.
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navigate to LoginScreen
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00539C',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00539C',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordSuccessScreen;
