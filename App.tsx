import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
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
import OTPScreen from './Src/Screens/OTPScreen/OTPScreen';
import NotificationScreen from './Src/Screens/Notification/NotificationScreen';
import CustomerserviceScreen from './Src/Screens/CustomerserviceScreen/CustomerserviceScreen';
import ProductDetailScreen from './Src/Screens/ProductDetailScreen/ProductDetailScreen';
import AddressScreen from './Src/Screens/AddressScreen/AddressScreen';
import { Home, Search, Heart, ShoppingBag, CircleUser } from 'lucide-react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let IconComponent;
          switch (route.name) {
            case 'Home':
              IconComponent = Home;
              break;
            case 'Search':
              IconComponent = Search;
              break;
            case 'Saved':
              IconComponent = Heart;
              break;
            case 'Cart':
              IconComponent = ShoppingBag;
              break;
            case 'Account':
              IconComponent = CircleUser;
              break;
            default:
              IconComponent = Home;
          }
          return <IconComponent size={size} color={color} style={styles.icon} />;
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Notification" component={CustomerserviceScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
