import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import LabelScroller from '../../Components/LabelScroller/LabelScroller';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const images = {
  img1: require("../../../assets/trousere.jpeg"),
  img2: require("../../../assets/tshirt2.jpg"),
  img3: require("../../../assets/tshirt.jpg")
}
const productData = [
  { id: 1, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 2, img: images.img2,  name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 3, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 4, img: images.img3, name: 'Regular Fit V-Neck', price: '1,290' },
  { id: 5, img: images.img3, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 6, img: images.img3,  name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 7, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 8, img: images.img3, name: 'Regular Fit V-Neck', price: '1,290' },
  { id: 9, img: images.img3, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 10, img: images.img3,  name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 11, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 12, img: images.img3, name: 'Regular Fit V-Neck', price: '1,290' }
];

  // const translateY = useSharedValue(0);


  const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const handleProductDetailNavigation = () => {
      navigation.navigate("ProductDetail")
    }

  // const gestureHandler = (event: any) => {
  //   translateY.value = event.nativeEvent.translationY;
  // };

  // const gestureEndHandler = () => {
  //   if (translateY.value > 150) {
  //     setModalVisible(false);
  //   }
  //   translateY.value = withSpring(0);
  // };

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateY: translateY.value }],
  //   };
  // });

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header showLeftIcon={false} loggedIn="false" leftIcon="arrow-left" rightIcon="bell" centerText="Discover" lefticonvisible="true"/> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={toggleModal}>
          <Icon name="sliders-h" color={'white'} size={20} solid={false}/>
        </TouchableOpacity>
      </View>

      <LabelScroller itemLabel={["All", "Jeans", "Shoes", "Abayas", "Shalwar", "Bangles", "Underwears"]}/>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.productRow}>
          {productData.map((product) => (
            <TouchableOpacity activeOpacity={1} onPress={handleProductDetailNavigation} key={product.id} style={styles.productContainer}>
              <Image resizeMode='cover' source={product.img} style={styles.productImage} />
              <TouchableOpacity style={styles.favoriteIcon}>
                <Icon name="heart" size={20} color="#000" />
              </TouchableOpacity>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
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
    // borderTopWidth: 1,
    // borderColor: '#e0e0e0',
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
    paddingHorizontal: 15,
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
  productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '48%', // Adjust this for two columns with some space between them
    height: 260,
    // borderWidth: 1,
    // borderColor: '#808080',
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden', // Ensure contents don't overflow
  },
  productImage: {
    width: '100%',
    height: '70%',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    textAlign: 'left',
    marginTop: '10%', // Adjust based on image height
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginHorizontal: 10,
    marginBottom: 10,
    textAlign: 'left'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    height: '50%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});