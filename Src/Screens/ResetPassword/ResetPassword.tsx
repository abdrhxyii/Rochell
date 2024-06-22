import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../Components/HeaderComponent/Header';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

export default function ResetPassword() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, confirmsetPasswordVisible] = useState(false);

    const HandleBack = () => {
        navigation.goBack()
    }

    const handleOTP = () => {
        navigation.navigate("OTPScreen")
    }

  return (
    <SafeAreaView style={styles.container}>
        <Icon style={styles.backButton} name="arrow-left" size={25} solid={false} onPress={HandleBack}/>
        <Header header="Reset Password" subheader="Set the new password for your account so you can login and access all the features"/>

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

            <Text style={styles.inputFieldText}>Password</Text>
            <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                secureTextEntry={!confirmpasswordVisible}
            />
            <TouchableOpacity onPress={() => confirmsetPasswordVisible(!confirmpasswordVisible)}>
                <Icon name={confirmpasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#808080" />
            </TouchableOpacity>
            </View>

        <PrimaryButton onPress={handleOTP} text="Continue"/>

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
    input: {
        width: 341,
        height: 53,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        paddingHorizontal: 16,
        marginBottom: 16,
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
})