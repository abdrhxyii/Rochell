import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 16,
    backgroundColor: 'white',
  },
})