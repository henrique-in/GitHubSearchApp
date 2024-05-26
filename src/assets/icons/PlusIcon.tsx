import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function PlusIcon({size = 6, color = 'black'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 6 6" fill="none">
      <Path
        d="M5.91016 3.41016H3.41016V5.91016H2.58984V3.41016H0.0898438V2.58984H2.58984V0.0898438H3.41016V2.58984H5.91016V3.41016Z"
        fill={color}
      />
    </Svg>
  );
}
