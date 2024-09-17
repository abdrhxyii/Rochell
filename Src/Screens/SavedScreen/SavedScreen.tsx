import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/HeaderComponent/Header'

const SavedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="My Cart"/>
     <View style={styles.content}>
     <Image
      source={require('../../../assets/Heart-duotone.png')}
      style={styles.bellImage}
     />
     <Text style={styles.noNotificationsText}>
      No Saved Item
     </Text>
     <Text style={styles.subText}>
      You dont have any save items.{"\n"}
      Go to home and add some
     </Text>
    </View>
  </SafeAreaView>
  )
}

export default SavedScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 40,
      padding: 16,
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
    textAlign: 'center',
    lineHeight: 20,
  },
});