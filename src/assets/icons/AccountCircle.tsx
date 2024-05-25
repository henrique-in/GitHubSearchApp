import React from 'react';

import {IconBase} from '@components';
import {Svg, Path} from 'react-native-svg';

export function AccountCircle({size = 20, color = '#00000'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.625 16.2812C7.8125 16.9062 8.9375 17.2188 10 17.2188C11.0625 17.2188 12.1719 16.9062 13.3281 16.2812C14.5156 15.6562 15.4062 14.8906 16 13.9844C15.9688 13.1094 15.2656 12.375 13.8906 11.7812C12.5156 11.1875 11.2188 10.8906 10 10.8906C8.78125 10.8906 7.48438 11.1875 6.10938 11.7812C4.73438 12.3438 4.03125 13.0781 4 13.9844C4.59375 14.8906 5.46875 15.6562 6.625 16.2812ZM12.1094 3.90625C11.5156 3.3125 10.8125 3.01562 10 3.01562C9.1875 3.01562 8.48438 3.3125 7.89062 3.90625C7.29688 4.5 7 5.20313 7 6.01562C7 6.82812 7.29688 7.53125 7.89062 8.125C8.48438 8.71875 9.1875 9.01562 10 9.01562C10.8125 9.01562 11.5156 8.71875 12.1094 8.125C12.7031 7.53125 13 6.82812 13 6.01562C13 5.20313 12.7031 4.5 12.1094 3.90625ZM2.92188 2.96875C4.89062 1 7.25 0.015625 10 0.015625C12.75 0.015625 15.0938 1 17.0312 2.96875C19 4.90625 19.9844 7.25 19.9844 10C19.9844 12.75 19 15.1094 17.0312 17.0781C15.0938 19.0156 12.75 19.9844 10 19.9844C7.25 19.9844 4.89062 19.0156 2.92188 17.0781C0.984375 15.1094 0.015625 12.75 0.015625 10C0.015625 7.25 0.984375 4.90625 2.92188 2.96875Z"
        fill={color}
      />
    </Svg>
  );
}
