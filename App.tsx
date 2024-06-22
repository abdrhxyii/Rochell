import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './Src/Screens/HomeScreen/HomeScreen';
import CartScreen from './Src/Screens/CartScreen/CartScreen';
import SearchScreen from './Src/Screens/SearchScreen/SearchScreen';
import SavedScreen from './Src/Screens/SavedScreen/SavedScreen';
import AccountScreen from './Src/Screens/AccountScreen/AccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './Src/Screens/SignupScreen/SignupScreen';
import LoginScreen from './Src/Screens/LoginScreen/LoginScreen';
import ForgotPasswordScreen from './Src/Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPassword from './Src/Screens/ResetPassword/ResetPassword';
import OTPScreen from './Src/Screens/OTPScreen/OTPScreen'

const homeIcon = require('./assets/Home.png');
const searchIcon = require('./assets/Search.png');
const savedIcon = require('./assets/Heart.png');
const cartIcon = require('./assets/Cart.png');
const accountIcon = require('./assets/User.png');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = homeIcon;
        } else if (route.name === 'Search') {
          iconName = searchIcon;
        } else if (route.name === 'Saved') {
          iconName = savedIcon;
        } else if (route.name === 'Cart') {
          iconName = cartIcon;
        } else if (route.name === 'Account') {
          iconName = accountIcon;
        }
        return <Image source={iconName} style={[styles.icon, { tintColor: color }]} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: {
        height: 70,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        paddingBottom: 12,
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Saved" component={SavedScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="OTPScreen" component={OTPScreen}/>
        <Stack.Screen name="Main" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 23,
    height: 23,
  },
});