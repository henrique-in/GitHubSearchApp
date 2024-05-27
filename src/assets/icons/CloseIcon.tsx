import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function CloseIcon({size = 6, color = 'white'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 6 6" fill="none">
      <Path
        d="M5.91016 0.675781L3.58594 3L5.91016 5.32422L5.32422 5.91016L3 3.58594L0.675781 5.91016L0.0898438 5.32422L2.41406 3L0.0898438 0.675781L0.675781 0.0898438L3 2.41406L5.32422 0.0898438L5.91016 0.675781Z"
        fill={color}
      />
    </Svg>
  );
}
