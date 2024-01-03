/**
 * Intro Rust G;
 * Gilroy-Regular
 * Gilroy-Medium;
 * Gilroy-Bold;
 * Gilroy-ExtraBold;
 */
const Fonts = {
  IntroRustG: require("@/assets/fonts/IntroRustG.ttf"),
  GiloryRegular: require("@/assets/fonts/Gilroy-Regular.ttf"),
  GiloryMedium: require("@/assets/fonts/Gilroy-Medium.ttf"),
  GiloryBold: require("@/assets/fonts/Gilroy-Bold.ttf.ttf"),
  GiloryExtraBold: require("@/assets/fonts/Gilroy-ExtraBold.ttf"),
};

export type FontFamily = keyof typeof Fonts;

export default Fonts;
