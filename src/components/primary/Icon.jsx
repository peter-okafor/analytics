import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { icons } from '../../shared/icons';

const Svg = styled.svg`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

export function Icon({ icon, block, width, height, ...props }) {
  return (
    <Svg viewBox="0 0 21 21" width={width} height={height} block={block} {...props}>
      <Path d={icons[icon]} />
    </Svg>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

Icon.defaultProps = {
  block: false,
};
