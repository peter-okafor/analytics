import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  display: ${props => (props.block ? 'block' : 'inline-block')};
`;

const Path = styled.path`
  fill: none;
`;

export function SearchIcon({ block, width, height, ...props }) {
  return (
    <Svg viewBox="0 0 21 21" width={width} height={height} block={block} fill="none" {...props}>
      <Path d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z" stroke="#A3A3C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M18.375 18.375L14.5687 14.5687" stroke="#A3A3C2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

SearchIcon.propTypes = {
  block: PropTypes.bool,
};

SearchIcon.defaultProps = {
  block: false,
};
