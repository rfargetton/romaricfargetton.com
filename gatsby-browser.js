import React from "react";
import "typeface-inter";
import "typeface-source-code-pro";
import ThemeManager from "./src/providers/ThemeManager.js" ;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeManager>
      {element}
    </ThemeManager>
  )
}
