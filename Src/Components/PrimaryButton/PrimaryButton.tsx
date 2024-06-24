import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PrimaryButton({text, onPress}: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    createAccountButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 16,
        width: 341,
        height: 53,
        justifyContent: 'center',
      },
      createAccountButtonText: {
        color: 'white',
        fontSize: 16,
      },
})