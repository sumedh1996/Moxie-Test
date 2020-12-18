import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { SPACING, HEIGHT, WIDTH } from '../../Utils/theme'

const styles = StyleSheet.create({
    image: {
        height: HEIGHT * 0.4,
        width: WIDTH,
        resizeMode: 'contain',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'

    },
    icon: {
        color: '#fff',
        position: 'absolute',
        top: SPACING * 2,
        left: SPACING
    }
});

export default styles