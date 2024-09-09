import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LabelScroller from '../../Components/LabelScroller/LabelScroller';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Modal from 'react-native-modal';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import Slider from '@react-native-community/slider';

const images = {
  img1: require("../../../assets/trousere.jpeg"),
  img2: require("../../../assets/tshirt2.jpg"),
  img3: require("../../../assets/tshirt.jpg")
};

const productData = [
  { id: 1, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 2, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 3, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 4, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 5, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 6, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 7, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 8, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 9, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 10, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 11, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 12, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 13, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 14, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 15, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 16, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 17, img: images.img1, name: 'Regular Fit Slogan', price: '1,190' },
  { id: 18, img: images.img2, name: 'Regular Fit Polo', price: '1,100', discount: '52%' },
  { id: 19, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
  { id: 20, img: images.img3, name: 'Regular Fit Black', price: '1,190' },
];

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [price, setPrice] = useState(0);


  const handleProductDetailNavigation = () => {
    navigation.navigate("ProductDetail")
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header header={"Discover"}/>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search rochell..."
        />
        <TouchableOpacity style={styles.filterBtn} onPress={toggleModal}>
          <Icon name="sliders-h" color={'white'} size={20} solid={false} />
        </TouchableOpacity>
      </View>

      <LabelScroller itemLabel={["All", "Jeans", "Shoes", "Abayas", "Shalwar", "Bangles", "Underwears"]} />

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

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropTransitionOutTiming={0}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalText}>Filters</Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Icon name="times" size={24} color="#000" />
            </TouchableOpacity>  
          </View>  
          <View style={styles.mainModalContent}>
            <View style={[styles.sectionWrapper, {height: 100,marginBottom: 10}]}>
            <Text style={styles.modalTextHeader}>Sort By</Text>
            <LabelScroller itemLabel={["Relevance", "Price: Low - High", "Price: High - low", "Category: Men", "Category: Women"]} />
            </View>
            
            <View style={[styles.sectionWrapper, {height: 70}]}>
            <View style={styles.priceContainer}>
              <Text style={styles.modalTextHeader}>Price</Text>
              <Text style={styles.sliderValue}>$0 - {price}</Text>
            </View>

            <View style={styles.sliderContainer}>
              <Slider
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={price}
                onValueChange={setPrice}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#000000"
              />
            </View>
            </View>
            
            <View style={styles.primaryButtonWrapper}>
            <PrimaryButton text={'Apply Filter'} width={'100%'}/>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 14,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -55,
  },
  textInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  filterBtn: {
    marginLeft: 10,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  filterBtnText: {
    color: '#fff',
  },
  categoryContainer: {
    flexDirection: 'row',
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
    width: '48%',
    height: 260,
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
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
    marginTop: '10%',
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
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 45
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    height: '50%',
    padding: 20
  },
  closeButton: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center'
  },
  mainModalContent: {
    marginTop: 10,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sliderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  modalTextHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 10
  },
  sliderValue: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryButtonWrapper: {
    position: 'absolute',
    bottom: -150,
    width: '100%'
  },
  sectionWrapper: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
});
