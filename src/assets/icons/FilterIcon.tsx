import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function FilterIcon({size = 18, color = '#7E7E7E'}) {
  return (
    <Svg width={size} height={(size / 18) * 12} viewBox="0 0 18 12" fill="none">
      <Path
        d="M3 6.98438V5.01562H15V6.98438H3ZM0 0H18V2.01562H0V0ZM6.98438 12V9.98438H11.0156V12H6.98438Z"
        fill={color}
      />
    </Svg>
  );
}
