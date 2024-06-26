import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/HeaderComponent/Header';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import GoogleButton from '../../Components/GoogleAuthButton/GoogleButton';
import FacebookButton from '../../Components/FacebookAuthButton/FacebookButton';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const SignupScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleRouteForLogin = () => {
        navigation.navigate("Login")
    }

  return (
    <SafeAreaView style={styles.container}>
      <Header header="Create an account" subheader="Let's create your account."/>

      <Text style={styles.inputFieldText}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
      />
      
      <Text style={styles.inputFieldText}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />
      
      <Text style={styles.inputFieldText}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#808080" />
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>
        By signing up you agree to our <Text style={styles.link}>Terms</Text>, <Text style={styles.link}>Privacy Policy</Text>, and <Text style={styles.link}>Cookie Use</Text>
      </Text>

      <PrimaryButton text="Create an Account"/>

      <Text style={styles.or}>or</Text>
      <GoogleButton text="Sign Up with Google"/>
      <FacebookButton text="Sign Up with Facebook"/>

      <Text style={styles.footerText}>
        Already have an account? <Text onPress={handleRouteForLogin} style={styles.link}>Log In</Text>
      </Text>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      padding: 27,
      backgroundColor: 'white',
    },
    header: {
      fontSize: 32,
      fontWeight: '900',
      marginBottom: 8,
    },
    subHeader: {
      fontSize: 16,
      marginBottom: 40,
    },
    input: {
      width: 341,
      height: 53,
      borderWidth: 1,
      borderColor: '#808080',
      borderRadius: 5,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    inputFieldText: {
     fontWeight: '700',
     lineHeight: 30,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#808080',
      borderRadius: 5,
      paddingHorizontal: 16,
      marginBottom: 16,
      width: 341,
      height: 53,
    },
    passwordInput: {
      flex: 1,
    },
    terms: {
      fontSize: 12,
      color: '#808080',
      marginBottom: 16,
    },
    link: {
      color: '#1A1A1A',
      fontWeight: '800',
      textDecorationLine: 'underline'
    },
    or: {
      textAlign: 'center',
      fontSize: 14,
      color: '#808080',
      marginBottom: 16,
    },
    footerText: {
      textAlign: 'center',
      fontSize: 14,
      color: '#808080',
    },
  });