import React from "react";
import "typeface-inter";
import ThemeManager from "./src/providers/ThemeManager.js" ;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManager>
      {element}
    </ThemeManager>
  )
}
