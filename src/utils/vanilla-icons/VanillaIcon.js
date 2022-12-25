import React from "react";

import './css/VanillaIcon.css';
import './css/RegularRounded.css';
import './css/BoldRounded.css';
import './css/SolidRounded.css';

function VanillaIcon(props) {
  const config = {
    size: 24,
  }

  return (
    <span className={
      `vanilla-icon 
      ${props.icon} 
      ${props.color || `vanilla-icon__color-default`}`
    }
    style={{
      width: props.size || config.size,
      height: props.size || config.size,
    }}
    />
  )
}

export default VanillaIcon;