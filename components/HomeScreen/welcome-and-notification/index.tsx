import { StyleSheet } from "react-native";
import { Text, View } from "../../Themed";
import React from "react";
import Avatar from "./avatar";
import NotificationIcon from "../../icons/NotificationActiveIcon";
import Colors from "../../../constants/Colors";
//
const WelcomeandNotification = () => {
  return (
    <View style={styles.welcome}>
      <Avatar />
      {/*   // * notification comp */}
      {/* // ? TODO this will be converted into a pressable in the future */}
      <View style={styles.notification}>
        <NotificationIcon active={true} />
      </View>
    </View>
  );
};

export default WelcomeandNotification;

const styles = StyleSheet.create({
  welcome: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notification: {
    backgroundColor: "#dfdfdf",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 8,
    padding: 1,
  },
});
