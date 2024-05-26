import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function UserAccountIcon({size = 14, color = '#E5E5E5'}) {
  return (
    <Svg width={size} height={(size * 10) / 14} viewBox="0 0 14 10" fill="none">
      <Path
        d="M5 5.65625C5.45833 5.65625 5.98958 5.71875 6.59375 5.84375C5.53125 6.42708 5 7.19792 5 8.15625V9.65625H0.34375V8C0.34375 7.52083 0.625 7.09375 1.1875 6.71875C1.77083 6.34375 2.40625 6.07292 3.09375 5.90625C3.78125 5.73958 4.41667 5.65625 5 5.65625ZM7.59375 6.84375C8.42708 6.51042 9.22917 6.34375 10 6.34375C10.7708 6.34375 11.5729 6.51042 12.4062 6.84375C13.2396 7.17708 13.6562 7.61458 13.6562 8.15625V9.65625H6.34375V8.15625C6.34375 7.61458 6.76042 7.17708 7.59375 6.84375ZM6.40625 3.75C6.01042 4.14583 5.54167 4.34375 5 4.34375C4.45833 4.34375 3.98958 4.14583 3.59375 3.75C3.19792 3.35417 3 2.88542 3 2.34375C3 1.80208 3.19792 1.33333 3.59375 0.9375C3.98958 0.541667 4.45833 0.34375 5 0.34375C5.54167 0.34375 6.01042 0.541667 6.40625 0.9375C6.80208 1.33333 7 1.80208 7 2.34375C7 2.88542 6.80208 3.35417 6.40625 3.75ZM11.1562 4.53125C10.8438 4.84375 10.4583 5 10 5C9.54167 5 9.14583 4.84375 8.8125 4.53125C8.5 4.19792 8.34375 3.80208 8.34375 3.34375C8.34375 2.88542 8.5 2.48958 8.8125 2.15625C9.14583 1.82292 9.54167 1.65625 10 1.65625C10.4583 1.65625 10.8438 1.82292 11.1562 2.15625C11.4896 2.48958 11.6562 2.88542 11.6562 3.34375C11.6562 3.80208 11.4896 4.19792 11.1562 4.53125Z"
        fill={color}
      />
    </Svg>
  );
}
