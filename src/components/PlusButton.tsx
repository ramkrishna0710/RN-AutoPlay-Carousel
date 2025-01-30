import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PlusButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
    <Image source={require('../assets/PlusIcon.png')} style={styles.icon}/>
    </TouchableOpacity>
  )
}

export default PlusButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212227',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 16,
        borderRadius: 12
    },
    icon: {
        width: 20,
        height: 20
    },
    txt: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    }
})