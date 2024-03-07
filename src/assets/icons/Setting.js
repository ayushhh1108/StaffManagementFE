import React from 'react';
import PropTypes from 'prop-types';

export default function SettingIcon({ fill, sx }) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} style={sx}>
  <g id="vuesax_bulk_row-vertical" data-name="vuesax/bulk/row-vertical" transform="translate(-236 -188)">
    <g id="row-vertical">
      <path id="Vector" d="M17.9,0H2.1C.6,0,0,.64,0,2.23V6.27C0,7.86.6,8.5,2.1,8.5H17.9c1.5,0,2.1-.64,2.1-2.23V2.23C20,.64,19.4,0,17.9,0Z" transform="translate(238 201.5)" opacity="0.4"/>
      <path id="Vector-2" data-name="Vector" d="M17.9,0H2.1C.6,0,0,.64,0,2.23V6.27C0,7.86.6,8.5,2.1,8.5H17.9c1.5,0,2.1-.64,2.1-2.23V2.23C20,.64,19.4,0,17.9,0Z" transform="translate(238 190)"/>
      <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(236 188)" fill="none" opacity="0"/>
    </g>
  </g>
</svg>

  
  );
}

SettingIcon.propTypes = {
  fill: PropTypes.string,
  sx: PropTypes.object,
};

SettingIcon.defaultProps = {
  fill: '#4d4663',
  sx: {},
};
