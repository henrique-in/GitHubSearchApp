import {Dimensions} from 'react-native';

export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;
export const winFont = Dimensions.get('window').fontScale;

const guidelineBaseWidth = 350;

const widthScale = (size: number) => Dimensions.get('window').width * size;
const heightScale = (size: number) => Dimensions.get('window').height * size;
const fontScale = (size: number) => size * (winWidth / guidelineBaseWidth);

export const Responsive = {
  widthScale,
  heightScale,
  fontScale,
};
