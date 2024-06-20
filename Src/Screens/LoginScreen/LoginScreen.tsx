import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import {useState} from 'react';
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleButton from '../../Components/GoogleAuthButton/GoogleButton';
import FacebookButton from '../../Components/FacebookAuthButton/FacebookButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleRouteLogin = () => {
        navigation.goBack()
    }
    const handleForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }

  return (
    <SafeAreaView style={styles.container}>
        <Header header="Login to your account" subheader="It's great to see you again."/>

        <Text style={styles.inputFieldText}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email address"
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
            Forgot your password? <Text onPress={handleForgotPassword} style={styles.link}>Reset your password</Text>
        </Text>

        <PrimaryButton text="Login"/>

        <Text style={styles.or}>or</Text>

        <GoogleButton text="Login with Google"/>
        <FacebookButton text="Login with Facebook"/>

      <Text style={styles.footerText}>
        Don't have an account? <Text onPress={handleRouteLogin} style={styles.link}>Join</Text>
      </Text>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 27,
        backgroundColor: 'white',
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
})