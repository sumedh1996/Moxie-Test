import React, { useEffect, useState } from 'react'
import { View, FlatList, } from 'react-native'
import NewsItem from '../../Components/NewsItem';
import { parseString } from 'xml2js';
import { HEIGHT, WIDTH } from '../../Utils/theme';

const HomeScreenV1 = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            var url = "https://timesofindia.indiatimes.com/rssfeeds/1221656.cms"
            await fetch(url)
                .then((response) => response.text())
                .then((responseText) => {
                    parseString(responseText, function (err, result) {
                        setData(result.rss.channel[0].item);
                    });
                })
                .catch((error) => {
                    console.log('Error fetching the feed: ', error);
                });
        }
        catch (error) {
            console.log(error)
        }
    }

    // Call after every 2 min
    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 120000)


        return () => clearInterval(interval)

    }, [])

    return (
        <FlatList
            contentContainerStyle={{ width: WIDTH }}
            data={data}
            style={{ flex: 1 }}
            pagingEnabled
            scrollEnabled
            decelerationRate='fast'
            bounces={false}
            keyExtractor={(_, index) => String(index)}

            renderItem={({ item, index }) => {
                return (
                    <View style={{ flex: 1, height: HEIGHT }}>
                        <NewsItem data={item} />
                    </View>
                )
            }}

        />
    )
}

export default HomeScreenV1;
