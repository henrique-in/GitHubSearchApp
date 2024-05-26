import React from 'react';

import {Svg, Path} from 'react-native-svg';

export function TrashIcon({size = 12, color = '#FF5100'}) {
  return (
    <Svg width={size} height={(size * 14) / 12} viewBox="0 0 12 14" fill="none">
      <Path
        d="M11.2383 1.23828V2.75H0.761719V1.23828H3.36328L4.13672 0.5H7.86328L8.63672 1.23828H11.2383ZM1.5 12.4883V3.48828H10.5V12.4883C10.5 12.8867 10.3477 13.2383 10.043 13.543C9.73828 13.8477 9.38672 14 8.98828 14H3.01172C2.61328 14 2.26172 13.8477 1.95703 13.543C1.65234 13.2383 1.5 12.8867 1.5 12.4883Z"
        fill={color}
      />
    </Svg>
  );
}
