import { Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;



const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = WIDTH * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

export { HEIGHT, WIDTH, SPACING, ITEM_HEIGHT, ITEM_WIDTH, OVERFLOW_HEIGHT, VISIBLE_ITEMS}