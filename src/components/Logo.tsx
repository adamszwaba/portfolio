import React from 'react';
import { ComponentWithAs, Icon, IconProps, useColorModeValue } from '@chakra-ui/react';

const Logo: ComponentWithAs<'svg', IconProps> = ({ ...props }) => {
  const { rect, maskPath, mask2path } = useColorModeValue(
    { rect: '#C4C4C4', maskPath: '#000', mask2path: '#333' },
    { rect: '#e1e1e1', maskPath: '#fff', mask2path: '#fcfcfcdd' },
  );
  return (
    <Icon viewBox="0 0 85 92" {...props}>
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="43"
        width="43"
        height="49"
      >
        <rect y="43.7483" width="42.5" height="48.2517" fill={rect} />
      </mask>
      <g mask="url(#mask0)">
        <path d="M42.5 46.6542L85 68.8454L42.5 91.0365L0 68.8454L42.5 46.6542Z" fill={maskPath} />
      </g>
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="85"
        height="92"
      >
        <rect width="85" height="92" fill={rect} />
      </mask>
      <g mask="url(#mask1)">
        <path d="M42.5 0.686859L85 22.3496L42.5 44.0124L0 22.3496L42.5 0.686859Z" fill={maskPath} />
        <path d="M0 21.8213L42.5 44.0124L0 66.2036L-42.5 44.0124L0 21.8213Z" fill={mask2path} />
      </g>
    </Icon>
  );
};

export default Logo;
