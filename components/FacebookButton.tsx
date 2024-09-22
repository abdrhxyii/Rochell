import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const FacebookButton = ({text}: any) => {
  return (
    <>
    <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('@/assets/images/logos_facebook.png')}/>
        <Text style={styles.facebookButtonText}>{text}</Text>
    </TouchableOpacity>
    </>
  )
}

export default FacebookButton

const styles = StyleSheet.create({
    facebookButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#1877F2',
        borderRadius: 10,
        gap: 10,
        alignItems: 'center',
        marginBottom: 16,
        width: 341,
        height: 53,
        justifyContent: 'center',
      },
      facebookButtonText: {
        color: 'white',
        fontSize: 16,
      },
})