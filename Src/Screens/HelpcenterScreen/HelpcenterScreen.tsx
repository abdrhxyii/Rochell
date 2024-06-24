import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../../Components/HeaderComponent/Header';

const HelpcenterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Help Center"/>
    </SafeAreaView>
  )
}

export default HelpcenterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 27,
        backgroundColor: 'white',
    },
})