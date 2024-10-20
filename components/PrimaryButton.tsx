import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PrimaryButton({text, onPress, width = 341}: any) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.createAccountButton, {width}]}>
        <Text style={styles.createAccountButtonText}>{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    createAccountButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 16,
        height: 45,
        justifyContent: 'center',
      },
      createAccountButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
      },
})