import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ScrollView, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react-native'; 
import PrimaryButton from '@/components/PrimaryButton';

const ProductDetail = () => {
    const [labelsize, setLabelsize] = useState(null);
    const scrollY = useRef(new Animated.Value(0)).current; // Track scroll position

    const productImages = [require('@/assets/images/cloth1.jpg'), require('@/assets/images/cloth1.jpg')]; // Add more images here
    const reviews = [
        { id: '1', text: 'Great quality, fits perfectly!', rating: 5 },
        { id: '2', text: 'Not what I expected.', rating: 2 },
        // Add more reviews here
    ];
    const specifications = [
        { key: 'Material', value: 'Cotton' },
        { key: 'Color', value: 'Blue' },
        { key: 'Care', value: 'Machine wash' },
    ];
    const relatedProducts = [
        { id: '1', title: 'Casual Fit Shirt', price: '$39.99', image: require('@/assets/images/cloth1.jpg') },
        { id: '2', title: 'Slim Fit Jeans', price: '$49.99', image: require('@/assets/images/cloth1.jpg') },
    ];

    const handleSizeClick = (size: any) => {
        setLabelsize(size);
    };

    // Handle scroll event
    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );

    // Interpolate the scroll position to control visibility
    const cartContainerTranslateY = scrollY.interpolate({
        inputRange: [0, 100], // Change based on when you want it to hide
        outputRange: [0, 100], // Move it off the screen
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }} 
                onScroll={handleScroll} 
                scrollEventThrottle={16}
            >
                <View>
                    {/* Image Carousel */}
                    <FlatList
                        data={productImages}
                        horizontal
                        renderItem={({ item }) => (
                            <Image source={item} style={styles.image} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                    
                    <TouchableOpacity style={styles.favoriteIcon}>
                        <Heart color="#000" size={24} />
                    </TouchableOpacity>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.productTitle}>Regular Fit Slogan</Text>
                        <TouchableOpacity style={styles.ratingContainer}>
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

                        {/* Product Specifications */}
                        <View style={styles.specificationsContainer}>
                            <Text style={styles.specificationsTitle}>Specifications</Text>
                            {specifications.map((spec, index) => (
                                <Text key={index} style={styles.specificationText}>{spec.key}: {spec.value}</Text>
                            ))}
                        </View>

                        {/* Reviews Section */}
                        <View style={styles.reviewsContainer}>
                            <Text style={styles.reviewsTitle}>Customer Reviews</Text>
                            {reviews.map((review) => (
                                <View key={review.id} style={styles.review}>
                                    <Text style={styles.reviewText}>{review.text}</Text>
                                    <Text style={styles.reviewRating}>Rating: {review.rating} ⭐</Text>
                                </View>
                            ))}
                        </View>

                        {/* Related Products */}
                        <View style={styles.relatedProductsContainer}>
                            <Text style={styles.relatedProductsTitle}>Related Products</Text>
                            <FlatList
                                data={relatedProducts}
                                horizontal
                                renderItem={({ item }) => (
                                    <View style={styles.relatedProduct}>
                                        <Image source={item.image} style={styles.relatedProductImage} />
                                        <Text style={styles.relatedProductTitle}>{item.title}</Text>
                                        <Text style={styles.relatedProductPrice}>{item.price}</Text>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <Animated.View style={[styles.cartContainer, { transform: [{ translateY: cartContainerTranslateY }] }]}>
                <View>
                    <Text style={{ color: '#808080', fontSize: 12, fontWeight: 'bold' }}>Price</Text>
                    <Text style={styles.price}>$1,190</Text>
                </View>
                <PrimaryButton width={240} text="Add to Cart" />
            </Animated.View>
        </SafeAreaView>
    );
}

export default ProductDetail;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 300,
        height: 400, 
        resizeMode: 'contain', 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20, 
        marginBottom: 10, 
        borderColor: '#000000'
    },
    detailsContainer: {
        paddingVertical: 10,
        padding: 10,
        flexGrow: 1, 
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
        marginVertical: 2,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
    },
    cartContainer: {
        position: 'absolute', 
        bottom: 0, 
        left: 0,
        right: 0,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: 'white', 
    },
    specificationsContainer: {
        marginTop: 20,
    },
    specificationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    specificationText: {
        fontSize: 16,
        marginVertical: 4,
    },
    reviewsContainer: {
        marginTop: 20,
    },
    reviewsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    review: {
        marginVertical: 8,
    },
    reviewText: {
        fontSize: 16,
        color: '#666',
    },
    reviewRating: {
        fontSize: 14,
        color: '#888',
    },
    relatedProductsContainer: {
        marginTop: 20,
    },
    relatedProductsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    relatedProduct: {
        marginRight: 10,
        alignItems: 'center',
    },
    relatedProductImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius: 8,
    },
    relatedProductTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    relatedProductPrice: {
        fontSize: 14,
        color: '#666',
    },
});
