import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({header, subheader}: any) {
  return (
    <>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subHeader}>{subheader}</Text>
    </>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 8,
    },
    subHeader: {
        fontSize: 16,
        marginBottom: 40,
        color: '#808080'
    },
})