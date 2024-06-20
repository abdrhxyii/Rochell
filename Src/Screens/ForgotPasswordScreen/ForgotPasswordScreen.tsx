import { StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const HandleBack = () => {
        navigation.goBack()
    }

    const handleSendCode = () => {
        navigation.navigate("ResetPassword")
    }

  return (
    <SafeAreaView style={styles.container}>
        <Icon style={styles.backButton} name="arrow-left" size={25} solid={false} onPress={HandleBack}/>
        <Header header="Forgot Password" subheader="Enter your email for the verification process. We will send 4 digit code to your email"/>

        <Text style={styles.inputFieldText}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            keyboardType="email-address"
        />
        <PrimaryButton onPress={handleSendCode} text="Send Code"/>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen

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
})