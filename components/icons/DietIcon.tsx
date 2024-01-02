import React, { FC } from "react";
import { Path, Svg } from "react-native-svg";
import { SVGIconProps } from "./HomeIcon";

const DietIcon: FC<SVGIconProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M1 15C1 13.1833 1.75833 11.7292 3.275 10.6375C4.79167 9.54583 6.53333 9 8.5 9C10.4667 9 12.2083 9.54583 13.725 10.6375C15.2417 11.7292 16 13.1833 16 15H1ZM1 19V17H16V19H1ZM2 23C1.71667 23 1.47917 22.9042 1.2875 22.7125C1.09583 22.5208 1 22.2833 1 22V21H16V22C16 22.2833 15.9042 22.5208 15.7125 22.7125C15.5208 22.9042 15.2833 23 15 23H2ZM18 23V15C18 13.1 17.35 11.4583 16.05 10.075C14.75 8.69167 13.1583 7.76667 11.275 7.3L11 5H16V1H18V5H23L21.375 21.2C21.325 21.7167 21.1125 22.1458 20.7375 22.4875C20.3625 22.8292 19.9167 23 19.4 23H18Z"
        fill="#757575"
      />
    </Svg>
  );
};

export default DietIcon;
