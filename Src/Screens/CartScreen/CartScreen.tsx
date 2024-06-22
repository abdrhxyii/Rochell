import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/HeaderComponent/Header'

const CartScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
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
  </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 40,
      padding: 27,
      backgroundColor: 'white',
    },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellImage: {
    marginBottom: 20,
  },
  noNotificationsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
});