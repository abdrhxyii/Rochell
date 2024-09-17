import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../Components/HeaderComponent/Header'

const orderData = [
    { id: '1', name: 'Regular Fit Slogan', size: 'Size M', price: '$1,190', status: 'In Transit' },
    { id: '2', name: 'Regular Fit Polo', size: 'Size L', price: '$1,300', status: 'Picked' },
    { id: '3', name: 'Regular Fit Black', size: 'Size XL', price: '$1,690', status: 'completed' },
    { id: '4', name: 'Regular Fit V-Neck', size: 'Size S', price: '$1,290', status: 'Packing' },
    { id: '5', name: 'Regular Fit Pink', size: 'Size M', price: '$1,341', status: 'Picked' },
    { id: '6', name: 'Regular Fit Slogan', size: 'Size M', price: '$1,190', status: 'In Transit' },
    { id: '7', name: 'Regular Fit Polo', size: 'Size L', price: '$1,300', status: 'Picked' },
    { id: '8', name: 'Regular Fit Black', size: 'Size XL', price: '$1,690', status: 'In Transit' },
    { id: '9', name: 'Regular Fit V-Neck', size: 'Size S', price: '$1,290', status: 'Packing' },
    { id: '10', name: 'Regular Fit Pink', size: 'Size M', price: '$1,341', status: 'Picked' },
  ];

  const OrderItem = ({ item }: any) => {
    const statusContainerStyle = item.status === 'completed' ? styles.statusContainerCompleted : styles.statusContainerDefault;
    const statusTextStyle = item.status === 'completed' ? styles.statusTextCompleted : styles.statusTextDefault;
  
    return (
      <View style={styles.itemContainer}>
        <Image source={require('../../../assets/trousere.jpeg')} style={styles.image} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemSize}>{item.size}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        <View style={statusContainerStyle}>
          <Text style={statusTextStyle}>{item.status}</Text>
        </View>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>{item.status === 'completed' ? 'Leave Comment' : 'Track Order'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
const MyOrder = () => {
    const [activeTab, setActiveTab] = useState('Ongoing');
  return (
    <SafeAreaView style={styles.container}>
        <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="My Orders"/>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
          onPress={() => setActiveTab('Ongoing')}
        >
          <Text style={styles.tabText}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.tab, activeTab === 'Completed' && styles.activeTab]}
          onPress={() => setActiveTab('Completed')}
        >
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={orderData}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default MyOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 16,
        backgroundColor: 'white',
    },
    tabContainer: {
      flexDirection: 'row',
      backgroundColor: '#ddd',
      marginBottom: 8,
      borderRadius: 10,
      marginTop: 10,
      padding: 6,
    },
    tab: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#fff',
      borderRadius: 6,
    },
    tabText: {
      fontSize: 13,
      fontWeight: 'bold'
    },
    itemContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 4,
    },
    itemDetails: {
      marginLeft: 16,
      flex: 1,
    },
    itemName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemSize: {
      fontSize: 12,
      color: '#666',
    },
    itemPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 4,
    },
    statusContainerDefault: {
      position: 'absolute',
      top: 16,
      right: 16,
      backgroundColor: '#ddd',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 6,
    },
    statusContainerCompleted: {
      position: 'absolute',
      top: 16,
      right: 16,
      backgroundColor: '#BDEABC',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 6,
    },
    statusTextDefault: {
      fontSize: 10,
      fontWeight: 'bold'
    },
    statusTextCompleted: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#0C9409'
    },
    trackButton: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: '#000',
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 5,
    },
    trackButtonText: {
      color: '#fff',
      fontSize: 12,
    },
  });