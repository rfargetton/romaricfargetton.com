import { lighten, darken } from "polished" ;

const nord = {
  // Polar Night
  0: "#2e3440",
  1: "#3b4252",
  2: "#434c5e",
  3: "#4c566a",
  // Snow Storm
  4: "#d8dee9",
  5: "#e5e9f0",
  6: "#eceff4",
  // Frost
  7: "#8fbcbb",
  8: "#88c0d0",
  9: "#81a1c1",
  10: "#5e81ac",
  // Aurora
  11: "#bf616a", //red
  12: "#d08770", //orange
  13: "#ebcb8b", //yellow
  14: "#a3be8c", //green
  15: "#b48ead" //purple
}

const Themes = {
  light: {
    name: "light",
    background: nord[4],
    backgroundDark: nord[0],
    backgroundHighlight: nord[6],
    backgroundCodeblock: nord[1],
    text: nord[0],
    purple: nord[15],
    code: nord[6],
    secondary: nord[3],
    link: nord[10],
    string: nord[14],
    number: nord[15],
    function: nord[8],
    keyword: nord[9],
    comment: nord[3],
    error: nord[11],
  },
  dark: {
    name: "dark",
    background: nord[0],
    backgroundDark: darken(0.1, nord[0]),
    backgroundHighlight: nord[1],
    backgroundCodeblock: nord[1],
    text: nord[6],
    purple: nord[15],
    code: nord[6],
    secondary: nord[4],
    link: nord[8],
    string: nord[14],
    number: nord[15],
    function: nord[8],
    keyword: nord[9],
    comment: nord[3],
    error: nord[11],
  }
}

export default Themes ;
