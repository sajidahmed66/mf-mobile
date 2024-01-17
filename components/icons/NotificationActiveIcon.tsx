import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Circle, Path, Svg } from "react-native-svg";
import { SVGIconProps } from "./HomeIcon";

interface INotificationIconProps extends SVGIconProps {
  active: boolean;
}

const NotificationIcon: FC<INotificationIconProps> = ({
  active = false,
  color,
  height,
  width,
}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V3.825C13.3333 4.15833 13.2083 4.50833 13.125 4.875C13.0417 5.24167 13 5.61667 13 6C13 7.38333 13.4875 8.5625 14.4625 9.5375C15.4375 10.5125 16.6167 11 18 11V17H20V19H4ZM18 9C17.1667 9 16.4583 8.70833 15.875 8.125C15.2917 7.54167 15 6.83333 15 6C15 5.16667 15.2917 4.45833 15.875 3.875C16.4583 3.29167 17.1667 3 18 3C18.8333 3 19.5417 3.29167 20.125 3.875C20.7083 4.45833 21 5.16667 21 6C21 6.83333 20.7083 7.54167 20.125 8.125C19.5417 8.70833 18.8333 9 18 9Z"
        fill="#292929"
      />
      <Circle cx="18" cy="6" r="3" fill={active ? "#37B677" : "#dfdfdf"} />
    </Svg>
  );
};

export default NotificationIcon;

const styles = StyleSheet.create({});
