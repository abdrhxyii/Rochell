import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Header from '../../Components/HeaderComponent/Header';

const accountItem = [
  {id: 1, icon: 'box-open', name: "My Orders"},
  {id: 2, icon: 'user-circle', name: "My Details"},
  {id: 3, icon: 'home', name: "Address Book"},
  {id: 4, icon: 'money-check-alt', name: "Payment Methods"},
  {id: 5, icon: 'bell', name: "Notifications"},
  {id: 6, icon: 'question-circle', name: "FAQs"},
  {id: 7, icon: 'headphones-alt', name: "Help Center"},
  {id: 8, icon: 'sign-out-alt', name: "Logout"}
]
const AccountScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Account"/>

    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 19,
    backgroundColor: 'white',
  },
})