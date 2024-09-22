import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react';

interface LabelScollProps {
    itemLabel: string[]
}

const LabelScroller: React.FC<LabelScollProps> = ({itemLabel}) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null> (null);

  const handleLabelClick = (data: any) => {
    setSelectedLabel(data)
  }
  return (
    <View style={{ height: 60 }}>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.categoryContainer}>
      { 
      itemLabel.map((data, index) => (
        <TouchableOpacity 
        key={index} 
        style={[styles.categoryButton, selectedLabel === data && styles.categoryContainerSelected]}
        onPress={() => handleLabelClick(data)}
        >
            <Text style={[styles.categoryText,  selectedLabel === data && styles.categoryTextSelected]}>{data}</Text>
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
        height: 35,
        justifyContent: 'center',
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#808080'
      },
      categoryText: {
        color: '#000',
        fontSize: 12,
      },
      categoryTextSelected: {
        color: '#fff'
      },
      categoryContainerSelected: {
        backgroundColor: "#000"
      }
})