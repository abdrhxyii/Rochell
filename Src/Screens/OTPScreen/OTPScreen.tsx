import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert } from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/HeaderComponent/Header';
import PrmaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Messagebox from '../../Components/Messagebox/Messagebox'

const OTPScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [otp, setOtp] = useState(["", "", "", ""])
    const [messaegboxvisible, setMessaegboxvisible] = useState(false)

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    }

    const HandleBack = () => {
        navigation.goBack();
    }

    const handleAlrt = () => {
      setMessaegboxvisible(true)
    }

  return (
    <SafeAreaView style={styles.container}>
        <Icon style={styles.backButton} name="arrow-left" size={25} solid={false} onPress={HandleBack}/>
        <Header header="Enter 4 Digit Code" subheader="Enter 4 digit code that you receive on your email (mmarahman4847@gmail.com)"/>
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
      <PrmaryButton onPress={handleAlrt} text="Continue"/>
      <Messagebox
        visible={messaegboxvisible} 
        onClose={() => setMessaegboxvisible(false)}
        title="Password Changed!"
        bodymessage="You can now use your new password to login to your account."
        type={'success'}
      />
    </SafeAreaView>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 27,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginBottom: 32,
  },
  backButton: {
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
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
  resendText: {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 32,
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