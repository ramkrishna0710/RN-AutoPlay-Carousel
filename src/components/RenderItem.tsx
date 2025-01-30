import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { MovieType } from '../data/Movies'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
  item: MovieType,
  index: number;
  x: SharedValue<number>
}

const RenderItem = ({ item, index, x }: Props) => {
  const { width } = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolation.CLAMP
    );
    return {
      opacity: opacityAnim,
    }
  })

  return (
    <View style={{ width: width, height: width }}>
      <Animated.Image source={item.titleImage} style={[styles.titleImage, animatedStyle]} />
    </View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
  titleImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    width: null,
    resizeMode: 'contain'
  }
})