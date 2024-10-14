import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'
import Header from '@/components/Header';
import { Trash2, Minus, Plus } from 'lucide-react-native';
import PrimaryButton from '@/components/PrimaryButton';
import { useRouter } from 'expo-router';

export default function Cart() {
  const route = useRouter()
  const images = {
    img1: require("@/assets/images/trousere.jpeg"),
    img2: require("@/assets/images/tshirt.jpg"),
  };

  const cartItems = [
    { id: '1', name: 'Regular Fit Slogan ...', size: 'L', price: 1190, quantity: 2, image: images.img1 },
    { id: '2', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
    { id: '3', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img2 },
    { id: '4', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
    { id: '5', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
    { id: '6', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img2 },
    { id: '7', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
    { id: '8', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
    { id: '9', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img2 },
    { id: '10', name: 'Regular Fit Slogan', size: 'L', price: 1190, quantity: 2, image: images.img1 },
    { id: '12', name: 'Regular Fit Polo', size: 'M', price: 1100, quantity: 1, image: images.img2 },
    { id: '13', name: 'Regular Fit Black', size: 'L', price: 1290, quantity: 1, image: images.img2 },
  ];

  const renderCartItem = ({ item } : any) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productSize}>Size {item.size}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>

        <TouchableOpacity style={styles.removeButton}>
          <Trash2 size={20} color="red" />
        </TouchableOpacity>

        <View style={styles.quantityControls}>
          <TouchableOpacity style={styles.quantityButton}>
            <Minus size={15} color="#000" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Plus size={15} color="#000" />
          </TouchableOpacity>
        </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
       <View style={styles.container}>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          overScrollMode='never'
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
          <PrimaryButton text={"Go To Checkout"} onPress={() => route.push('/Signup')} width={'100%'}/>
        </View>
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
    alignItems: 'center',
    marginBottom: 13,
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
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
    right: 8,
    top: 10
  },
  summary: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
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
    fontSize: 15,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: 'semibold'
  },
  checkoutButton: {
    borderRadius: 8,
    position: 'relative',
    top: 8
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