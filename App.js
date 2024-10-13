
import Signup from './Signup';
import HomeScreen from './HomeScreen';
import PasswordSuccessScreen from './PasswordSuccessScreen'; // Import Password success screen
import LoginScreen from './LoginScreen'; // Import Login screen
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PasswordSuccess" component={PasswordSuccessScreen} /> 
        <Stack.Screen name="Login" component={LoginScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
