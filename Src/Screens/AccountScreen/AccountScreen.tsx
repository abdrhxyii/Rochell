import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Header from '../../Components/HeaderComponent/Header';

const accountItem = [
  {id: '1', icon: 'box-open', name: "My Orders"},
  {id: '2', icon: 'user-circle', name: "My Details"},
  {id: '3', icon: 'home', name: "Address Book"},
  {id: '4', icon: 'money-check-alt', name: "Payment Methods"},
  {id: '5', icon: 'bell', name: "Notifications"},
  {id: '6', icon: 'question-circle', name: "FAQs"},
  {id: '7', icon: 'headphones-alt', name: "Help Center"},
  {id: '8', icon: 'sign-out-alt', name: "Logout"}
]
const AccountScreen = () => {

  const renderAccountItem = ({item}: any) => (
    // <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.itemContainer}>
      <Icon name={item.icon} style={styles.itemIcon} size={18} color="black" solid={false} />
      <Text>{item.name}</Text>
      <Icon name="box-open" size={10} color="black" solid={false} />
    </TouchableOpacity>
    // </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Account"/>
      <FlatList
         data={accountItem}
         renderItem={renderAccountItem}
         keyExtractor={item => item.id}
         showsVerticalScrollIndicator={false}
      />

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
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  itemIcon: {
    marginRight: 10
  }
})