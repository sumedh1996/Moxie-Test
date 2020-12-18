import { StyleSheet } from 'react-native';
import { SPACING, ITEM_HEIGHT, ITEM_WIDTH } from '../../Utils/theme';


const styles = StyleSheet.create({
    container: {
        height: ITEM_HEIGHT * 1.4,
        width: ITEM_WIDTH * 1.1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 20,

    },
    image: {
        height: ITEM_HEIGHT / 2,
        width: ITEM_WIDTH * 1.1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        resizeMode: 'cover',

    },
    detailsContainer: {
        margin: SPACING,
    },
    tagView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        paddingTop: SPACING,
        fontSize: 28,
        fontWeight: '600',

    },
    description: {
        paddingTop: SPACING,
        fontSize: 16,
        opacity: 0.7,
        color: 'black',
    },
    date: {
        paddingTop: SPACING,
        fontSize: 12,
        opacity: 0.6,
        color: 'black'

    },
    button: {
        paddingTop: SPACING * 2
    }
});

export default styles