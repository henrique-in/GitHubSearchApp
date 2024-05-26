import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function EditIcon({size = 8, color = 'white'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 8 8" fill="none">
      <Path
        d="M7.61108 1.92969L6.84937 2.69141L5.28687 1.12891L6.04858 0.367188C6.12671 0.289062 6.22437 0.25 6.34155 0.25C6.45874 0.25 6.5564 0.289062 6.63452 0.367188L7.61108 1.34375C7.68921 1.42188 7.72827 1.51953 7.72827 1.63672C7.72827 1.75391 7.68921 1.85156 7.61108 1.92969ZM0.228271 6.1875L4.83765 1.57812L6.40015 3.14062L1.79077 7.75H0.228271V6.1875Z"
        fill={color}
      />
    </Svg>
  );
}
