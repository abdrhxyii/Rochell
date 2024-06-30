import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react'
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const ProductDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Details"/>
        <Image
            source={require('../../../assets/tshirt.jpg')} // Replace with the actual image URL
            style={styles.image}
        />
        <TouchableOpacity style={styles.favoriteIcon}>
            <Icon name="heart" size={20} color="#000" />
        </TouchableOpacity>

        <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>Regular Fit Slogan</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>4.0/5 (45 reviews)</Text>
        </View>
        <Text style={styles.description}>
          The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.
        </Text>
        
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>Choose size</Text>
          <View style={styles.sizeButtons}>
            <TouchableOpacity style={styles.sizeButton}><Text>S</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}><Text>M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.sizeButton}><Text>L</Text></TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.cartContainer}> 
            <View style={{

            }}>
                <Text style={{color: '#808080', fontSize: 12,}}>Price</Text>
                <Text style={styles.price}>$1,190</Text>
            </View>
            <PrimaryButton width={240} text="Add to Cart"/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 27,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
        borderRadius: 10,
      },
      detailsContainer: {
        paddingVertical: 10
      },
      productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
      },
      ratingText: {
        marginLeft: 8,
        fontSize: 16,
      },
      description: {
        fontSize: 16,
        color: '#666',
        marginVertical: 8,
      },
      sizeContainer: {
        // marginVertical: 16,
      },
      sizeText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      sizeButtons: {
        flexDirection: 'row',
        // marginVertical: 8,
      },
      sizeButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 4,
        marginHorizontal: 4,
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
      },
      favoriteIcon: {
        position: 'absolute',
        top: 120,
        right: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
      },
      cartContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        bottom: -75,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
      }
})