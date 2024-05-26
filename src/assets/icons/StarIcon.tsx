import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function StartIcon({size = 20, color = '#E5E5E5'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 1.5L12.5882 7.91176L19.4118 8.58824L14 12.9706L15.1765 19.6765L10 16.1176L4.82353 19.6765L6 12.9706L0.588235 8.58824L7.41176 7.91176L10 1.5Z"
        fill={color}
      />
    </Svg>
  );
}
