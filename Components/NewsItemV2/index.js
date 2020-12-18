import React, { useState, useEffect } from 'react'
import { View, Image, Text, Button, Linking, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { ITEM_WIDTH, ITEM_HEIGHT } from '../../Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import { SPACING } from '../../Utils/theme';
import { FontAwesome } from '@expo/vector-icons'

export default function NewsItemV2({ data }) {

    const [descriptionContent, setDescriptionContent] = useState(null);
    const [imagePath, setImagePath] = useState(null);
    const [pressed, setPressed] = useState(false);
    const [isBookmarkPressed, setIsBookmarkPressed] = useState(false);

    const navigation = useNavigation()

    const title = data.title[0];
    const descriptionData = data.description[0];

    function descriptionParser(data) {
        if (data) {

            if (data.includes('</a>')) {
                var test = data.split('</a>');
                var t = test.length > 1 ? test[1] : test[0]

                setDescriptionContent(t);
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

    const onButtonPress = (url) => {
        const asycPress = async (url) => {
            await Linking.openURL(url)
        }
        asycPress(url);
    }
    const onPress = () => {
        setPressed(true)
    };
    useEffect(() => {
        onPress()
    }, [pressed])


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: handleImage(imagePath) }}
                style={styles.image}
            />
            <View style={styles.detailsContainer}>
                <View style={styles.tagView}>
                    <Text style={{ color: 'gray' }}>NEWS TAG</Text>
                    <TouchableOpacity onPress={() => { setIsBookmarkPressed(!isBookmarkPressed) }}>
                        {isBookmarkPressed ? <FontAwesome name="bookmark" size={26} color={'gray'}/> : <FontAwesome name="bookmark-o" size={26} />}
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    {title}
                </Text>


                <Text style={styles.description}>{descriptionContent}</Text>

                <Text style={styles.date}>{data.pubDate[0]}</Text>

                <View style={styles.button}>
                    <Button title={'Read Full Story'}  onPress={() => Linking.openURL(data.link[0])} />
                </View>

            </View>
        </View>
    )
}
