import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react';
import { StackNavigationState } from '@react-navigation/native';

// const labelsItems = ["All", "Jeans", "Shoes", "Abayas", "Shalwar", "Bangles", "Underwears"]
interface LabelScollProps {
    itemLabel: string[]
}

const LabelScroller: React.FC<LabelScollProps> = ({itemLabel}) => {
  return (
    <View style={{ height: 60 }}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.categoryContainer}>
      { 
      itemLabel.map((data, index) => (
        <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{data}</Text>
        </TouchableOpacity>
      ))
      }
    </ScrollView>
    </View>
  )
}

export default LabelScroller

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        // marginBottom: 10, // Adjust this value based on your design needs
        paddingTop: 10,
      },
      categoryButton: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 15,
        height: 40,
        justifyContent: 'center',
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#808080'
      },
      categoryText: {
        color: '#000',
        fontSize: 12,
      },
})