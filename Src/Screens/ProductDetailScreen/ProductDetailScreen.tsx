import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const ProductDetailScreen = () => {
    const [labelsize, setLabelsize] = useState(null);

    const handleSizeClick = (size: any) => {
      setLabelsize(size)
    }
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
        <TouchableOpacity style={styles.ratingContainer}>
          <Icon name="star" size={16}  color="#FFD700" />
          <Text style={styles.ratingText}>4.0/5 <Text>(45 reviews)</Text></Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          The name says it all, the right size slightly snugs the body leaving enough room for comfort in the sleeves and waist.
        </Text>
        
        <View>
          <Text style={styles.sizeText}>Choose size</Text>
          <View style={styles.sizeButtons}>
          {['S', 'M', 'L'].map((size) => (
            <TouchableOpacity
              key={size}
              activeOpacity={1}
              style={[styles.sizeButton, labelsize === size && styles.sizeButtonClick]}
              onPress={() => handleSizeClick(size)}>
                <Text style={[styles.sizeButtonText, labelsize === size && styles.sizeButtonTextClick]}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.cartContainer}> 
            <View>
                <Text style={{color: '#808080', fontSize: 12, fontWeight: 'bold'}}>Price</Text>
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
        fontWeight: 'bold',
        textDecorationLine: 'underline'
      },
      description: {
        fontSize: 16,
        color: '#666',
        lineHeight: 20
      },
      sizeText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
      },
      sizeButtons: {
        flexDirection: 'row',
      },
      sizeButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        padding: 13,
        width: 50,
        borderRadius: 8,
        marginRight: 10,
        marginTop: 10
      },
      sizeButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
      },
      sizeButtonTextClick: {
        color: '#fff'
      },
      sizeButtonClick: {
        backgroundColor: '#000',
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
        bottom: -65,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
      }
})