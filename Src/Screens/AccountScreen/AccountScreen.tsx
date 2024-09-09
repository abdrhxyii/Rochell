import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Header from '../../Components/HeaderComponent/Header';
import {
  Package,
  User,
  MapPin,
  CreditCard,
  Bell,
  HelpCircle,
  LifeBuoy,
  LogOut
} from 'lucide-react-native';

const accountItem = [
  { id: '1', icon: Package, name: 'My Orders' },
  { id: '2', icon: User, name: 'My Details' },
  { id: '3', icon: MapPin, name: 'Address Book' },
  { id: '4', icon: CreditCard, name: 'Payment Methods' },
  { id: '5', icon: Bell, name: 'Notifications' },
  { id: '6', icon: HelpCircle, name: 'FAQs' },
  { id: '7', icon: LifeBuoy, name: 'Help Center' },
  { id: '8', icon: LogOut, name: 'Logout' }
];

const AccountScreen = () => {
  const renderAccountItem = ({ item }: any) => {
    const IconComponent = item.icon;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <IconComponent size={24} style={styles.itemIcon} />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Account" />
      <FlatList
        data={accountItem}
        renderItem={renderAccountItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 16,
    backgroundColor: 'white',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 18,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemIcon: {
    marginRight: 10,
  },
});
