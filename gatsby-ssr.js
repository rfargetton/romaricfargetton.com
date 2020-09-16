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

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.props && x.props["data-react-helmet"]) {
      return -1;
    } else if (y.props && y.props["data-react-helmet"]) {
      return 1;
    }
    return 0;
  })
  replaceHeadComponents(headComponents)
}