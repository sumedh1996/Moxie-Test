import { StyleSheet } from 'react-native';
import { WIDTH } from '../../Utils/theme';
import { SPACING , OVERFLOW_HEIGHT} from '../../Utils/theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: -1,
    },
    location: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
    },
    itemContainer: {
        height: OVERFLOW_HEIGHT,
        //width: 300,
        padding: SPACING * 2,
    },
    itemContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overflowContainer: {
        height: OVERFLOW_HEIGHT,
        overflow: 'hidden',
    },
});
export default styles;