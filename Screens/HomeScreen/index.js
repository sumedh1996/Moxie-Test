import styles from './styles';
import { parseString } from 'xml2js';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Animated,
  View,
  SafeAreaView,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import { ITEM_WIDTH, SPACING, VISIBLE_ITEMS } from '../../Utils/theme'
import NewsItemV2 from '../../Components/NewsItemV2';



export default function HomeScreen() {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });
  const [newsItems, setnewsItems] = useState([]);

  const getData = async () => {
    try {
      var url = "https://timesofindia.indiatimes.com/rssfeeds/1221656.cms"
      await fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          parseString(responseText, function (err, result) {
            setnewsItems(result.rss.channel[0].item);
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

  useEffect(() => {
    getData()
    const interval = setInterval(() => {
      getData()
    }, 120000)


    return () => clearInterval(interval)

  }, [])





  React.useEffect(() => {
    if (index === newsItems.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...newsItems, ...newsItems];
      setnewsItems(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === newsItems.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key='right'
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>

          <FlatList
            data={newsItems}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING,
              marginTop: SPACING * 2,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: newsItems.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -50],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    backgroundColor: 'black',
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <NewsItemV2 data={item} />
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

