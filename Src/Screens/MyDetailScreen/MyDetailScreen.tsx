import { StyleSheet, Text, View, SafeAreaView, TextInput, Platform, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Header from '../../Components/HeaderComponent/Header'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const MyDetailScreen = () => {
    const [gender, setGender] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [dateString, setDateString] = useState('');

    const onChange = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || date // if user selected date or else current date (today)
      setShow(Platform.OS === 'ios')
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      setDateString(fDate);
    }

    const showDatepicker = () => {
      setShow(true);
    };

  return (
    <SafeAreaView style={styles.container}>
        <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="My Details"/>
      <ScrollView showsVerticalScrollIndicator={false}>
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

      <Text style={styles.inputFieldText}>Date of birth</Text>
      <TextInput
        style={styles.input}
        value={dateString}
        placeholder="Select date"
        onPress={showDatepicker}
        showSoftInputOnFocus={false}
      />
      {
        show && 
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      }

      <Text style={styles.inputFieldText}>Gender</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue: any, itemIndex: any) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>

      <Text style={styles.inputFieldText}>Phone Number</Text>
      <View style={styles.phoneInputContainer}>
        <Text style={styles.phoneCode}>+94</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.primaryButtonBottom}>
        <PrimaryButton text="Submit"/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 27,
        backgroundColor: 'white',
      },
    inputFieldText: {
        fontWeight: '700',
        lineHeight: 30,
    },
    input: {
        // width: 341,
        height: 53,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        paddingHorizontal: 16,
        marginBottom: 16,
      },
    primaryButtonBottom: {
        marginTop: 20
    },
    pickerContainer: {
        width: '100%',
        height: 53,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        marginBottom: 16,
        justifyContent: 'center',
      },
      picker: {
        width: 341,
        height: 53,
      },
      phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        marginBottom: 16,
      },
      phoneCode: {
        paddingHorizontal: 16,
        height: 53,
        lineHeight: 53,
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      phoneInput: {
        flex: 1,
        width: 341,
        height: 53,
        paddingHorizontal: 16,
      },
})