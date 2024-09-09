import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Header from '../../Components/HeaderComponent/Header';

const addresses = [
    { id: '1', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    { id: '2', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    { id: '3', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    { id: '4', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
    { id: '5', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    { id: '6', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    { id: '7', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    { id: '8', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
    { id: '9', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    { id: '10', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    // { id: '11', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    // { id: '12', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
    // { id: '13', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    // { id: '14', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    // { id: '15', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    // { id: '16', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
    // { id: '17', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    // { id: '18', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    // { id: '19', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    // { id: '20', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
  ];

const AddressScreen = () => {
    const [selectedAddress, setSelectedAddress] = useState(null);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.addressContainer}
      onPress={() => setSelectedAddress(item.id)}
      activeOpacity={1}
    >
      <View style={styles.iconContainer}>
        <Icon name="map-marker-alt" size={24} color="#000" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.addressType}>
          {item.type} {item.isDefault && <Text style={styles.defaultLabel}>(Default)</Text>}
        </Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.radioContainer}>
        <Icon
          name={selectedAddress === item.id ? 'dot-circle' : 'circle'}
          size={24}
          color="#000"
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Address"/>

      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
            <TouchableOpacity style={styles.addAddressButton}>
              <Icon name="plus" size={24} color="#000"/>
              <Text style={styles.addAddressText}>Add New Address</Text>
            </TouchableOpacity>
          }
      />
      <View style={styles.applyButton}>
        <PrimaryButton text={"Apply"} width={"100%"}/>
      </View>
    </SafeAreaView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 16,
        backgroundColor: 'white',
      },
      addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      iconContainer: {
        marginRight: 16,
      },
      textContainer: {
        flex: 1,
      },
      addressType: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      defaultLabel: {
        color: '#888',
        fontSize: 14,
      },
      address: {
        fontSize: 14,
        color: '#666',
      },
      radioContainer: {
        marginLeft: 16,
      },
      addAddressButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 35,
        borderRadius: 10
      },
      addAddressText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
      },
      applyButton: {
        marginTop: 10
      }
})