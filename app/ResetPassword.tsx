import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import PrimaryButton from '@/components/PrimaryButton';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

export default function ResetPassword() {
    const route = useRouter()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, confirmsetPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <ArrowLeft size={25} /> 
            </TouchableOpacity>
            <Header header="Reset Password" subheader="Set the new password for your account so you can login and access all the features"/>

            <Text style={styles.inputFieldText}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <Eye size={20} color="#808080" /> : <EyeOff size={20} color="#808080" />} 
                </TouchableOpacity>
            </View>

            <Text style={styles.inputFieldText}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    secureTextEntry={!confirmpasswordVisible}
                />
                <TouchableOpacity onPress={() => confirmsetPasswordVisible(!confirmpasswordVisible)}>
                    {confirmpasswordVisible ? <Eye size={20} color="#808080" /> : <EyeOff size={20} color="#808080" />} 
                </TouchableOpacity>
            </View>

            <PrimaryButton onPress={() => route.push('/OTPScreen')} text="Continue"/>
        </SafeAreaView>
    )
}

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
});
