import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WatchNowButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
    <Image source={require('../assets/PlayIcon.png')} style={styles.icon}/>
      <Text style={styles.txt}>Watch Now</Text>
    </TouchableOpacity>
  )
}

export default WatchNowButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212227',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 35,
        paddingVertical: 14,
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