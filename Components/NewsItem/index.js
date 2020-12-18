import React, { useEffect, useState } from 'react'
import { View, Text, Linking, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'

export default function NewsItem({ data }) {
    const [descriptionContent, setDescriptionContent] = useState(null);
    const [imagePath, setImagePath] = useState(null);

    const navigation = useNavigation()

    const title = data.title[0];
    const descriptionData = data.description[0];

    function descriptionParser(data) {
        if (data) {

            if (data.includes('</a>')) {
                var text = data.split('</a>');
                var descTest = text.length > 1 ? text[1] : text[0];
                setDescriptionContent(descTest);
                const postImage = test[0].split('src=');
                setImagePath(postImage[1].replace('/>', '').replace(/"/g, "").trim());
            }
            else {
                setDescriptionContent(data);
                setImagePath("dummy image");
            }

        }

    }
    const handleImage = (path) => {
        if (path === 'dummy image') {
            return 'https://generalimagestest.s3.us-east-2.amazonaws.com/template.jpeg'
        }
        return path
    }

    useEffect(() => {
        descriptionParser(descriptionData)
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView >
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ImageScreen', { path: imagePath })}>
                    <Image
                        style={styles.image}
                        source={{ uri: handleImage(imagePath) }} />
                </TouchableWithoutFeedback>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{descriptionContent}</Text>
                    <Text style={styles.date}>
                        {data.pubDate[0]}
                    </Text>

                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Text
                    style={styles.readMore}
                    onPress={() => Linking.openURL(data.link[0])}>
                    Read Full Story
            </Text>
                <AntDesign name="arrowright" size={30} />
            </View>

        </View>

    )
}
