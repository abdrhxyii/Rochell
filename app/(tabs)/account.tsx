import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
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
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

export default function Account() {
  const route = useRouter()
  const accountItem = [
    { id: '1', icon: Package, name: 'My Orders', route: 'MyOrder' },
    { id: '2', icon: User, name: 'My Details', route: 'MyDetail'},
    { id: '3', icon: MapPin, name: 'Address Book', route: 'MyDetail' },
    { id: '4', icon: CreditCard, name: 'Payment Methods', route: 'MyDetail' },
    { id: '5', icon: Bell, name: 'Notifications', route: 'MyDetail' },
    { id: '6', icon: HelpCircle, name: 'FAQs', route: 'MyDetail' },
    { id: '7', icon: LifeBuoy, name: 'Help Center', route: 'MyDetail' },
    { id: '8', icon: LogOut, name: 'Logout', route: 'MyDetail' },
    // { id: '9', icon: Package, name: 'My Orders', route: 'MyOrder' },
    // { id: '10', icon: User, name: 'My Details', route: 'MyDetail'},
    // { id: '11', icon: MapPin, name: 'Address Book', route: 'MyDetail' },
    // { id: '12', icon: CreditCard, name: 'Payment Methods', route: 'MyDetail' },
    // { id: '13', icon: Bell, name: 'Notifications', route: 'MyDetail' },
    // { id: '14', icon: HelpCircle, name: 'FAQs', route: 'MyDetail' },
    // { id: '15', icon: LifeBuoy, name: 'Help Center', route: 'MyDetail' },
    // { id: '16', icon: LogOut, name: 'Logout', route: 'MyDetail' }
  ];
  
  const renderAccountItem = ({ item }: any) => {
    const IconComponent = item.icon;
    return (
      <TouchableOpacity style={styles.itemContainer}  activeOpacity={1} onPress={() => route.push(item.route)}>
        <IconComponent color="#000" size={24} style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={styles.chevronContainer}>
          <ChevronRight color="#000" size={24} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={accountItem}
          renderItem={renderAccountItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
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
})