import React from 'react' ;

const svgStyle = {
  fill: "none",
  stroke: "black",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "3px"
}

const Logo = ({ width }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width}  
      viewBox="0 0 44.177 34"
    >
      <path style={svgStyle} d="M-2104.32,1918.336h4.413a5.63,5.63,0,0,0,5.631-5.631v-8.764a5.631,5.631,0,0,1,5.631-5.631h9.391" transform="translate(2105.82 -1886.837)"/>
      <path style={svgStyle} d="M-2089,1917.01h10.988a5.631,5.631,0,0,0,5.631-5.631v-18.738a5.631,5.631,0,0,1,5.631-5.631h4.352" transform="translate(2104.021 -1885.51)"/>
      <line style={svgStyle} x2="6.628" transform="translate(35.048 31.5)"/>
      <line style={svgStyle} x2="10.009" transform="translate(31.659 11.5)"/>
      <line style={svgStyle} x2="6.628" transform="translate(1.518 11.482)"/>
    </svg>
  )
}

export default Logo ;
