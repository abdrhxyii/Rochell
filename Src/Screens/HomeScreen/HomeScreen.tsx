import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView, Modal } from 'react-native';
import React, {useState} from 'react'
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const productData = [
  { name: 'Regular Fit Slogan', price: '1,190' },
  { name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { name: 'Regular Fit Black', price: '1,190' },
  { name: 'Regular Fit V-Neck', price: '1,290' }
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBottomSheet = () => {
    setModalVisible(true)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header showLeftIcon={false} loggedIn="false" leftIcon="arrow-left" rightIcon="bell" centerText="Discover" lefticonvisible="true"/>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your message..."
        />
        <TouchableOpacity onPress={handleBottomSheet} style={styles.sendButton}>
          <Icon name="sliders-h" color={'white'} size={20} solid={false}/>
        </TouchableOpacity>
      </View>

      <View style={{ height: 60 }}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Tshirts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Jeans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Abayas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Shalwar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Bangles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Underwears</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>


      <View style={styles.productcontainer}>
        <TouchableOpacity>
        <Image resizeMode='center' source={require('../../../assets/tshirt2.jpg')} style={styles.productImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteIcon}>
            <Icon name="heart" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.productName}>Regular Fit Slogan</Text>
        <Text style={styles.productPrice}>$1,190</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Text>Hello</Text>
      </Modal>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 27,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    paddingTop: 20
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  sendButtonText: {
    color: '#fff',
  },
  categoryContainer: {
    flexDirection: 'row',
    // marginBottom: 10, // Adjust this value based on your design needs
    paddingTop: 10,
  },
  categoryButton: {
    display: 'flex',
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    marginRight: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 12,
  },
  productcontainer: {
    width: 180,
    height: 200,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: "100%",
  },
  productContainer: {
    flex: 1,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
    // textAlign: 'left'
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    margin: 8,
    marginVertical: -7,
    // textAlign: 'left'
  },
});