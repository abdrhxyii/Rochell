import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '@/components/Header'

const Saved = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('@/assets/images/Heart-duotone.png')}
            style={styles.bellImage}
          />
        <Text style={styles.noNotificationsText}>No Saved Item</Text>
        <Text style={styles.subText}>
          You dont have any save items.{"\n"}
          Go to home and add some
        </Text>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Saved

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
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