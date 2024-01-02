import React, { FC } from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "./HomeIcon";

const WorkoutIcon: FC<SVGIconProps> = () => {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <Path
        d="M18.9749 8.02507L12.9249 1.97507L13.3499 1.55007C13.7332 1.16674 14.2082 0.979237 14.7749 0.987571C15.3416 0.995904 15.8166 1.19174 16.1999 1.57507L19.4249 4.80007C19.8082 5.1834 19.9999 5.65424 19.9999 6.21257C19.9999 6.7709 19.8082 7.24174 19.4249 7.62507L18.9749 8.02507ZM6.6499 20.4001C6.26657 20.7834 5.79574 20.9751 5.2374 20.9751C4.67907 20.9751 4.20824 20.7834 3.8249 20.4001L0.599902 17.1751C0.216569 16.7917 0.0249023 16.3209 0.0249023 15.7626C0.0249023 15.2042 0.216569 14.7334 0.599902 14.3501L0.999902 13.9501L7.0499 20.0001L6.6499 20.4001ZM10.2749 19.7001C10.0749 19.9001 9.84157 20.0001 9.5749 20.0001C9.30824 20.0001 9.0749 19.9001 8.8749 19.7001L1.2999 12.1251C1.0999 11.9251 0.999902 11.6917 0.999902 11.4251C0.999902 11.1584 1.0999 10.9251 1.2999 10.7251L2.7249 9.27507C2.9249 9.07507 3.1624 8.97507 3.4374 8.97507C3.7124 8.97507 3.9499 9.07507 4.1499 9.27507L5.7249 10.8501L9.8749 6.70007L8.2999 5.12507C8.0999 4.92507 7.9999 4.69174 7.9999 4.42507C7.9999 4.1584 8.0999 3.92507 8.2999 3.72507L9.7249 2.27507C9.9249 2.07507 10.1624 1.97507 10.4374 1.97507C10.7124 1.97507 10.9499 2.07507 11.1499 2.27507L18.7249 9.85007C18.9249 10.0501 19.0249 10.2876 19.0249 10.5626C19.0249 10.8376 18.9249 11.0751 18.7249 11.2751L17.2749 12.7001C17.0749 12.9001 16.8416 13.0001 16.5749 13.0001C16.3082 13.0001 16.0749 12.9001 15.8749 12.7001L14.2999 11.1251L10.1499 15.2751L11.7249 16.8501C11.9249 17.0501 12.0249 17.2876 12.0249 17.5626C12.0249 17.8376 11.9249 18.0751 11.7249 18.2751L10.2749 19.7001Z"
        fill="#757575"
      />
    </Svg>
  );
};

export default WorkoutIcon;
