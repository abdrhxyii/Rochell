import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/HeaderComponent/Header';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Notifications"/>
      <View style={styles.content}>
        <Image
          source={require('../../../assets/Bell-duotone.png')}
          style={styles.bellImage}
        />
        <Text style={styles.noNotificationsText}>
          You haven’t gotten any notifications yet!
        </Text>
        <Text style={styles.subText}>
          We’ll alert you when something cool happens.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

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