import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GoogleIcon from '../../../assets/logos_google-icon.png';

const GoogleButton = ({text}: any) => {
  return (
    <>
    <TouchableOpacity style={styles.googleButton}>
      <Image source={GoogleIcon}/>
      <Text style={styles.googleButtonText}>{text}</Text>
    </TouchableOpacity>
    </>
  )
}

export default GoogleButton

const styles = StyleSheet.create({
    googleButton: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: '808080',
        borderWidth: 1,
        borderRadius: 10,
        gap: 10,
      //   paddingVertical: 16,
        alignItems: 'center',
        marginBottom: 16,
        width: 341,
        height: 53,
        justifyContent: 'center',
    },
    googleButtonText: {
        fontSize: 16,
    },
})