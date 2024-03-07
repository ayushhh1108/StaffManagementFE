import React from 'react';
import PropTypes from 'prop-types';

export default function LogoutIcon({ fill, sx }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} style={sx}>
    <g id="vuesax_bulk_mouse-square" data-name="vuesax/bulk/mouse-square" transform="translate(-556 -636)">
      <g id="mouse-square">
        <path id="Vector" d="M0,0H24V24H0Z" transform="translate(556 636)" fill="none" opacity="0"/>
        <path id="Vector-2" data-name="Vector" d="M13.47,0H5.52C2.06,0,0,2.06,0,5.52v7.95c0,3.46,2.07,5.52,5.52,5.52h7.95c3.46,0,5.52-2.06,5.52-5.52V5.52C18.99,2.06,16.92,0,13.47,0Z" transform="translate(558.01 638)" fill="#292d32" opacity="0.4"/>
        <path id="Vector-3" data-name="Vector" d="M7.95,4.823l-1.63.55a1.505,1.505,0,0,0-.96.96l-.55,1.63a1.516,1.516,0,0,1-2.89-.03L.07,1.983A1.519,1.519,0,0,1,1.97.073l5.96,1.85A1.526,1.526,0,0,1,7.95,4.823Z" transform="translate(570.01 650.017)" fill="#292d32"/>
      </g>
    </g>
  </svg>
  
  );
}

LogoutIcon.propTypes = {
  fill: PropTypes.string,
  sx: PropTypes.object,
};

LogoutIcon.defaultProps = {
  fill: '#4d4663',
  sx: {},
};
