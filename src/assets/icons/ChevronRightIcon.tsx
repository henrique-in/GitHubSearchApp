import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function ChevronRightIcon({size = 8, color = 'black'}) {
  return (
    <Svg width={size} height={(size * 12) / 8} viewBox="0 0 8 12" fill="none">
      <Path
        d="M0.578125 10.5938L5.17188 6L0.578125 1.40625L1.98438 0L7.98438 6L1.98438 12L0.578125 10.5938Z"
        fill={color}
      />
    </Svg>
  );
}
