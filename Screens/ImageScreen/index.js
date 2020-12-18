import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'

export default function ImageScreen({ navigation, route }) {
    const { path } = route.params;
    const handleImage = (path) => {
        if (path === 'dummy image') {
            return 'https://generalimagestest.s3.us-east-2.amazonaws.com/template.jpeg'
        }
        return path
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                <AntDesign size={30} style={styles.icon} name="close" />
            </TouchableOpacity>

            <Image
                style={styles.image}
                source={{ uri: handleImage(path) }}
            />
        </View>
    )
}
