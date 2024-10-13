import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (userName === 'atharva' && password === 'sawant') {
      Alert.alert(`Welcome ${userName}`);
      navigation.navigate('Home');
    } else {
      Alert.alert(`Incorrect`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        {/* Displaying Full Logo */}
        <Image
          source={require('./assets/xpentra.png')} // Add your image path here
          style={styles.headerImage}
          resizeMode='contain' // Ensures full image display without cropping
        />

        {/* Title */}
        {/* <Text style={styles.mainHeader}>Sign Up</Text> */}

        {/* User Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Enter Your Name</Text>
          <TextInput
            style={styles.inputStyle}
            value={userName}
            onChangeText={(actualData) => setUserName(actualData)}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer2}>
          <Text style={styles.labels}>Enter Your Password</Text>
          <TextInput
            style={styles.inputStyle}
            secureTextEntry={true}
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
          />
        </View>

        {/* Checkbox for Agreement */}
        <View style={styles.wrapper}>
          <Checkbox
            style={styles.check}
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? '#00539C' : undefined}
          />
          <Text style={styles.wrapperText}>I have read and agreed with the T&Cs.</Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.buttonStyle, { backgroundColor: agree ? '#00539C' : 'grey' }]}
          disabled={!agree}
          onPress={() => submit()}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  headerImage: {
    width: 200, // Adjusted width
    height: 50,  // Adjusted height to make it smaller
    marginBottom: 30,
  },
  mainHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
    marginLeft: 50,
  },
  inputContainer2: {
    marginBottom: 30,
    width: '100%',
    marginLeft: 50,
  },
  labels: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    width: 300,
  },
  check: {
    marginTop: 20,
    marginLeft: -15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 15,
  },
  buttonStyle: {
    width: 300,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
