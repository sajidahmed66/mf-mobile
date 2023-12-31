import React, { FC } from "react";
import { Svg, Path } from "react-native-svg";

interface SVGIconProps {
  width?: string;
  height?: string;
  color?: string;
}
const HomeIcon: FC<SVGIconProps> = ({ color, height, width }) => {
  return (
    <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <Path d="M0 18V6L8 0L16 6V18H10V11H6V18H0Z" fill="#9E9E9E" />
    </Svg>
  );
};

export default HomeIcon;
