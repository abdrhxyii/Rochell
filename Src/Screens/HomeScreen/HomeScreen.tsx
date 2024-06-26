import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React, {useState} from 'react'
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const productData = [
  { name: 'Regular Fit Slogan', price: '1,190' },
  { name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { name: 'Regular Fit Black', price: '1,190' },
  { name: 'Regular Fit V-Neck', price: '1,290' }
];

  const translateY = useSharedValue(0);


  const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const gestureHandler = (event: any) => {
    translateY.value = event.nativeEvent.translationY;
  };

  const gestureEndHandler = () => {
    if (translateY.value > 150) {
      setModalVisible(false);
    }
    translateY.value = withSpring(0);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header showLeftIcon={false} loggedIn="false" leftIcon="arrow-left" rightIcon="bell" centerText="Discover" lefticonvisible="true"/>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={toggleModal}>
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
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        backdropTransitionOutTiming={0}
      >
        <PanGestureHandler onGestureEvent={gestureHandler} onEnded={gestureEndHandler}>
          <Animated.View style={[styles.modalContent, animatedStyle]}>
            <View style={styles.handle} />
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Icon name="times" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Hello</Text>
          </Animated.View>
        </PanGestureHandler>
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginVertical: 10,
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