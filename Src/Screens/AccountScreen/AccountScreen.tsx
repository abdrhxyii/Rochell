import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import React, {useState} from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Header from '../../Components/HeaderComponent/Header';
import { Package } from 'lucide-react-native';

const accountItem = [
  {id: '1', icon: require("../../../assets/package.png"), name: "My Orders"},
  {id: '2', icon: require("../../../assets/Details.png"), name: "My Details"},
  {id: '3', icon: require("../../../assets/Address.png"), name: "Address Book"},
  {id: '4', icon: require("../../../assets/Vector.png"), name: "Payment Methods"},
  {id: '5', icon: require("../../../assets/Bell.png"), name: "Notifications"},
  {id: '6', icon: require("../../../assets/Question.png"), name: "FAQs"},
  {id: '7', icon: require("../../../assets/Headphones.png"), name: "Help Center"},
  {id: '8', icon: require("../../../assets/package.png"), name: "Logout"}
]
const AccountScreen = () => {

  const renderAccountItem = ({item}: any) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Package size={24} style={styles.itemIcon} />
      {/* <Image source={item.icon}/> */}
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon ="arrow-left" rightIcon="bell" centerText="Account"/>
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
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  itemIcon: {
    marginRight: 10
  }
})