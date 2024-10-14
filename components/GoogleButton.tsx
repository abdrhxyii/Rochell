import { StyleSheet, Text, TouchableOpacity, Image,View } from 'react-native'
import React from 'react'

const GoogleButton = () => {
  return (
    <>
    <TouchableOpacity style={styles.googleButton}>
      <Image source={require('@/assets/images/google1.png')} style={styles.googleImage}/>
      <View style={styles.textWrapper}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
    </>
  )
}

export default GoogleButton

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    height: 45,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#0000000'
  },
  googleImage: {
    marginRight: 10,
    width: 27,
    height: 27,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center', 
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 13,
    textAlign: 'center',
  },
});
