import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const addresses = [
    { id: '1', type: 'Home', address: '925 S Chugach St #APT 10, Alaska', isDefault: true },
    { id: '2', type: 'Office', address: '2438 6th Ave, Ketchikan, Alaska', isDefault: false },
    { id: '3', type: 'Apartment', address: '2551 Vista Dr #B301, Juneau, Alaska', isDefault: false },
    { id: '4', type: 'Parent\'s House', address: '4821 Ridge Top Cir, Anchorage, Alaska', isDefault: false },
  ];

const AddressScreen = () => {
    const [selectedAddress, setSelectedAddress] = useState('1');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.addressContainer}
      onPress={() => setSelectedAddress(item.id)}
    >
      <View style={styles.iconContainer}>
        <Icon name="place" size={24} color="#000" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.addressType}>
          {item.type} {item.isDefault && <Text style={styles.defaultLabel}>(Default)</Text>}
        </Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.radioContainer}>
        <Icon
          name={selectedAddress === item.id ? 'radio-button-checked' : 'radio-button-unchecked'}
          size={24}
          color="#000"
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 24,
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
        alignItems: 'center',
        paddingVertical: 16,
      },
      addAddressText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
      },
      applyButton: {
        backgroundColor: '#000',
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 24,
      },
      applyButtonText: {
        color: '#fff',
        fontSize: 16,
      },
})