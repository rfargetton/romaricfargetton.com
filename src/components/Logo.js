import React from 'react' ;

const svgStyle = {
  fill: "none",
  stroke: "black",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "3px"
}

const Logo = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48.52 36.99"
      style={{ width: "40px" }}
    >
      <title>logo - 1</title>
      <path d="M-2104.32,1921h5a6.38,6.38,0,0,0,6.38-6.38v-9.93a6.38,6.38,0,0,1,6.38-6.38h10.64" transform="translate(2105.82 -1885.51)" style={svgStyle} />
      <path d="M-2089,1921h12.45a6.38,6.38,0,0,0,6.38-6.38v-21.23a6.38,6.38,0,0,1,6.38-6.38h4.93" transform="translate(2105.82 -1885.51)" style={svgStyle} />
      <line x1="39.51" y1="35.49" x2="47.02" y2="35.49" style={svgStyle} />
      <line x1="35.67" y1="12.83" x2="47.01" y2="12.83" style={svgStyle}/>
      <line x1="1.52" y1="12.81" x2="9.03" y2="12.81" style={svgStyle}/>
    </svg>
  )
}

export default Logo ;
