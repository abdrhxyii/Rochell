import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Heart } from 'lucide-react-native'; 
import PrimaryButton from '@/components/PrimaryButton';
import Header from '@/components/Header';

const ProductDetail = () => {
    const [labelsize, setLabelsize] = useState(null);

    const handleSizeClick = (size: any) => {
        setLabelsize(size);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Image
                source={require('@/assets/images/trousere.jpeg')}
                style={styles.image}
            />
            <TouchableOpacity style={styles.favoriteIcon}>
                <Heart color="#000" size={20} />
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

                <View style={styles.cartContainer}>
                    <View>
                        <Text style={{ color: '#808080', fontSize: 12, fontWeight: 'bold' }}>Price</Text>
                        <Text style={styles.price}>$1,190</Text>
                    </View>
                    <PrimaryButton width={240} text="Add to Cart" />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default ProductDetail;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        paddingTop: 40,
        padding: 16,
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'cover',
    },
    detailsContainer: {
        paddingVertical: 10,
        padding: 10
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
        marginVertical: 5,
    },
    favoriteIcon: {
        position: 'absolute',
        top: 120,
        right: 30,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 6,
    },
    cartContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-between',
        bottom: -65,
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
    }
});
