const pallette = {
  white: '#fff',
  black: '#000',
  gray: '#7E7E7E',
  gray2: '#BDBDBD',
  gray3: '#D9D9D9',
  gray4: '#F8F8F8',
  gray5: '#EBEBEB',
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
  yellow: '#ff0',
  yellow2: '#FFC700',
  yellowOpacity: 'rgba(255, 199, 0, 0.16)',
  internationalOrange: '#FF5100',
};

export const colors = {
  primary: pallette.internationalOrange,
  background: pallette.white,
  backgroundSecondary: pallette.gray4,
  ...pallette,
};
