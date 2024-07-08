import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import Header from '../../Components/HeaderComponent/Header'
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const images = {
  img1: require("../../../assets/trousere.jpeg"),
  img2: require("../../../assets/tshirt2.jpg"),
  img3: require("../../../assets/tshirt.jpg")
};

const cartItems = [
  { id: '1', name: 'Regular Fit Slogan ...', size: 'L', price: 1190, quantity: 2, image: images.img1 },
  { id: '2', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
  { id: '3', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img3 },
  { id: '4', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
  { id: '5', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
  { id: '6', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img3 },
  { id: '7', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
  { id: '8', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
  { id: '9', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img3 },
  { id: '10', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
  { id: '12', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
  { id: '13', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img3 },
];

const CartScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleAddressScreen = () => {
    navigation.navigate("Address")
  }

  const renderCartItem = ({ item } : any) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productSize}>Size {item.size}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton}>
        <Icon name="trash-alt" size={15} color="red" solid={false} />
      </TouchableOpacity>

      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.quantityButton}>
          <Icon name="minus" size={15} color="#000" solid={false} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Icon name="plus" size={15} color="#000" solid={false} />
        </TouchableOpacity>
      </View>
    
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="My Cart"/>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.summary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Sub-total</Text>
          <Text style={styles.summaryAmount}>$5870</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>VAT (%)</Text>
          <Text style={styles.summaryAmount}>$0.00</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Shipping fee</Text>
          <Text style={styles.summaryAmount}>$80</Text>
        </View>
        <View style={styles.summaryTotal}>
          <Text style={styles.summaryText}>Total</Text>
          <Text style={[styles.summaryAmount, {fontWeight: 'bold', fontSize: 18}]}>$5950</Text>
        </View>
      </View>
      <View style={styles.checkoutButton}>
        <PrimaryButton onPress={handleAddressScreen} text={"Go To Checkout"} width={'100%'}/>
      </View>

  </SafeAreaView>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 19,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 13,
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  productImage: {
    width: 75,
    height: '100%',
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',

  },
  productSize: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 13
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 10,
    marginTop: 45
  },
  quantityButton: {
    padding: 4,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    margin: 0,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 2,
    top: 10
  },
  summary: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  summaryText: {
    fontSize: 16,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: 'semibold'
  },
  checkoutButton: {
    borderRadius: 8,
    position: 'relative',
    top: 18
  },
});

{/* <SafeAreaView style={styles.container}>
<Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="My Cart"/>
<View style={styles.content}>
<Image
 source={require('../../../assets/Cart-duotone.png')}
 style={styles.bellImage}
/>
<Text style={styles.noNotificationsText}>
 Your cart is empty
</Text>
<Text style={styles.subText}>
 When you add products, they'll appear here
</Text>
</View>
</SafeAreaView> */}

  // container: {
  //     flex: 1,
  //     paddingTop: 40,
  //     padding: 27,
  //     backgroundColor: 'white',
  //   },
  // content: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // bellImage: {
  //   marginBottom: 20,
  // },
  // noNotificationsText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  // subText: {
  //   fontSize: 14,
  //   color: '#888',
  // },