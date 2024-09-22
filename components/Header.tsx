import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';

export default function Header({header, subheader, loggedIn = false, centerText = "", leftIcon, rightIcon, showLeftIcon = true}: any) {
  const router = useRouter();

  // const handleNotification = () => {
  //   router.push("/notification"); // Navigate to the notification screen
  // }

  const handleBack = () => {
    router.back(); // Go back to the previous screen
  }

  return (
    <>
      { 
        loggedIn === false ?
        <>
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.subHeader}>{subheader}</Text>
        </> :
        <>
          <View style={styles.logedheader}>
            { showLeftIcon && <Icon name={leftIcon} size={20} onPress={handleBack} solid={false} /> }
            <Text style={styles.logedheaderTitle}>{centerText}</Text>
            <Icon name={rightIcon} size={20} solid={false} />
          </View>
        </>
      }
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 40,
    color: '#808080',
  },
  logedheader: {
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logedheaderTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
