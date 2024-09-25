import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ArrowLeft } from 'lucide-react-native'; // Import Lucide icon
import Header from '@/components/Header';
import PrimaryButton from '@/components/PrimaryButton';
import { useRouter } from 'expo-router';

const ForgotPassword = () => {
  const route = useRouter()

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
            <ArrowLeft size={25} color="#000" /> 
        </TouchableOpacity>
        <Header header="Forgot Password" subheader="Enter your email for the verification process. We will send a 4-digit code to your email"/>

        <Text style={styles.inputFieldText}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            keyboardType="email-address"
        />
        <PrimaryButton onPress={() => route.push('/OTPScreen')} text="Send Code"/>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 27,
        backgroundColor: 'white',
    },
    backButton: {
        marginBottom: 10
    },
    inputFieldText: {
        fontWeight: '700',
        lineHeight: 30,
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
});
