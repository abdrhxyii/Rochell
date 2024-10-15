import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native'; 
import PrimaryButton from '@/components/PrimaryButton';
import FacebookButton from '@/components/FacebookButton';
import GoogleButton from '@/components/GoogleButton';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

const Login = () => {
    const route = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Header header="Login to your account" subheader="It's great to see you again." />

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
                    {passwordVisible ? (
                        <Eye size={20} color="#808080" />  
                    ) : (
                        <EyeOff size={20} color="#808080" />  
                    )}
                </TouchableOpacity>
            </View>

            <Text style={styles.terms}>
                Forgot your password? <Text style={styles.link} onPress={() => route.push('/ResetPassword')}>Reset your password</Text>
            </Text>

            <PrimaryButton text="Login" width={"100%"} />

            <Text style={styles.or}>or</Text>

            <GoogleButton />
            <FacebookButton />

            <Text style={styles.footerText}>
                Don't have an account? <Text style={styles.link}>Join</Text>
            </Text>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    input: {
        width: '100%',
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
        width: '100%',
        height: 50,
    },
    passwordInput: {
        flex: 1,
    },
    terms: {
        fontSize: 12,
        color: '#808080',
        marginBottom: 16,
        textAlign: 'center',
    },
    link: {
        color: '#1A1A1A',
        fontWeight: '800',
        textDecorationLine: 'underline',
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
