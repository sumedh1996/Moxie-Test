import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { SPACING, HEIGHT, WIDTH } from '../../Utils/theme'

const styles = StyleSheet.create({
    container: {


    },
    image: {
        height: HEIGHT * 0.4,
        width: WIDTH,
        resizeMode: 'cover',
        marginTop: SPACING * 4

    },
    detailsContainer: {
        marginHorizontal: SPACING * 2,
        height: HEIGHT * 0.5
    },
    title: {
        paddingTop: SPACING *3,
        fontSize: 28,
        fontWeight: '600',

    },
    description: {
        paddingTop: SPACING,
        fontSize: 20,
        opacity: 0.6,
        color: 'black',
    },
    date: {
        paddingTop: SPACING,
        fontSize: 14,
        opacity: 0.6,
        color: 'gray'
    },
    readMore: {
        color: '#6f7878',
        fontSize: 24,
       
    },
    bottomContainer: {
        flexDirection: 'row',
        bottom: SPACING ,
        justifyContent: 'center',
        left: SPACING * 2
    }
});

export default styles