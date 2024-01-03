const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";
const primary = " #37B677";
const secondary = "#EAB824";
const lightgray = "#9E9E9E";
const gray = "#757575";
const dark = "#404041";
const darker = "#292929";
const denger = "#F42E43";
const info = "#4084FC";
/**
 * Colors object that defines the color palette for both light and dark themes.
 *
 * You can add more color tokens to suit your specific use cases like ChatBubbles, Cards etc.
 */
export default {
  light: {
    text: "#000",
    primary: primary,
    secondary: secondary,
    background: "#fff",
    gray,
    lightgray,
    dark,
    darker,
    denger,
    info,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    primary: primary,
    secondary: secondary,
    background: "#000",
    gray,
    lightgray,
    dark,
    darker,
    denger,
    info,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
