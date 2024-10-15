import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';

const FacebookButton = () => {
  return (
    <>
      <TouchableOpacity style={styles.facebookButton}>
        <Image 
          source={require('@/assets/images/facebook1.png')} 
          style={styles.facebookImage}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FacebookButton;

const styles = StyleSheet.create({
  facebookButton: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    height: 45,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000000'
  },
  facebookImage: {
    marginRight: 10,
    width: 27,
    height: 27,
  },
  textWrapper: {
    flex: 1, // Ensures the text takes up the remaining space
    alignItems: 'center', // Center aligns text horizontally
  },
  facebookButtonText: {
    color: '#000000',
    fontSize: 13,
    textAlign: 'center', // Centers the text within the textWrapper
  },
});
