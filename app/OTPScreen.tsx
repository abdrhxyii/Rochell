import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react-native';
import Messagebox from '@/components/Messagebox';
import PrimaryButton from '@/components/PrimaryButton';
import Header from '@/components/Header';

const OTPScreen = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [messageBoxVisible, setMessageBoxVisible] = useState(false);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    }

    const handleAlert = () => {
        setMessageBoxVisible(true);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ArrowLeft style={styles.backButton} size={25} />
            <Header header="Enter 4 Digit Code" subheader="Enter 4 digit code that you receive on your email (mmarahman4847@gmail.com)" />
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>
            <Text style={styles.terms}>Email not received? <Text style={styles.link}>Resend code</Text></Text>
            <PrimaryButton onPress={handleAlert} text="Continue" />
            <Messagebox
                visible={messageBoxVisible}
                onClose={() => setMessageBoxVisible(false)}
                title="Password Changed!"
                bodymessage="You can now use your new password to login to your account."
                type={'success'}
            />
        </SafeAreaView>
    )
}

export default OTPScreen;

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
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 24,
    },
    terms: {
        fontSize: 12,
        color: '#808080',
        marginBottom: 16,
        textAlign: 'center'
    },
    link: {
        color: '#1A1A1A',
        fontWeight: '800',
        textDecorationLine: 'underline'
    },
});
