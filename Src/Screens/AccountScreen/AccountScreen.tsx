import { Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, View } from 'react-native';
import React from 'react';
import Header from '../../Components/HeaderComponent/Header';
import {
  Package,
  User,
  MapPin,
  CreditCard,
  Bell,
  HelpCircle,
  LifeBuoy,
  LogOut,
  ChevronRight
} from 'lucide-react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const accountItem = [
  { id: '1', icon: Package, name: 'My Orders', route: 'MyOrder' },
  { id: '2', icon: User, name: 'My Details', route: 'MyDetail'},
  { id: '3', icon: MapPin, name: 'Address Book', route: 'MyDetail' },
  { id: '4', icon: CreditCard, name: 'Payment Methods', route: 'MyDetail' },
  { id: '5', icon: Bell, name: 'Notifications', route: 'MyDetail' },
  { id: '6', icon: HelpCircle, name: 'FAQs', route: 'MyDetail' },
  { id: '7', icon: LifeBuoy, name: 'Help Center', route: 'MyDetail' },
  { id: '8', icon: LogOut, name: 'Logout', route: 'MyDetail' }
];

const AccountScreen = () => {
  const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePress = (route: string) => {
    navigate.navigate(route);
  };

  const renderAccountItem = ({ item }: any) => {
    const IconComponent = item.icon;
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress(item.route)} activeOpacity={1}>
        <IconComponent color="#000" size={24} style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={styles.chevronContainer}>
          <ChevronRight color="#000" size={24} />
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between', 
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1, 
  },
  chevronContainer: {
    marginLeft: 10, 
  },
});
