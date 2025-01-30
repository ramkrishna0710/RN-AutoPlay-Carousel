import { StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { MovieType } from '../data/Movies';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
    index: number;
    item: MovieType;
    x: SharedValue<number>;
}

const BackImage = ({ index, item, x }: Props) => {
    const { width } = useWindowDimensions();

    const animatedStyle = useAnimatedStyle(() => {
        const opacityAnim = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-0.6, 1, -0.6],
            Extrapolation.CLAMP
        );        
        return {
            opacity: opacityAnim,
        }
    })

    return (
        <Animated.Image
            source={item.image}
            style={[
                StyleSheet.absoluteFillObject,
                {
                    width: width,
                    height: width,
                },
                animatedStyle,
            ]}
        />
    )
}

export default BackImage

const styles = StyleSheet.create({})