const React = require("react");
require("typeface-inter");

import ThemeManager from "./src/providers/ThemeManager.js" ;
import Themes from "./src/styles/Themes.js" ;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManager>
      {element}
    </ThemeManager>
  )
}

