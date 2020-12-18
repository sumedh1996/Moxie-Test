import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, SafeAreaView, Button } from 'react-native'
import { SPACING } from '../../Utils/theme'

export default function NavigationScreen({ navigation }) {

    return (
        <SafeAreaView style={{margin: SPACING * 2}}>

           <View style={{marginTop: SPACING *2}}>
           <Button title={'News Data v1'} onPress={()=> {
                navigation.navigate('HomeScreenV1')
            }} 
            />
           </View>
           <View style={{marginTop: SPACING *2}}>
           <Button title={'News Data v2'} onPress={() => {
                navigation.navigate('HomeScreen')
            }} />
           </View>
        </SafeAreaView>
    )
}
