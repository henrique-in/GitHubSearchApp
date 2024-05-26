import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function ArrowLeftIcon({size = 22, color = 'black'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <Path
        d="M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z"
        fill={color}
      />
    </Svg>
  );
}
