import { StyleSheet } from "react-native";
import { Text, View } from "../../Themed";
import React from "react";

const WelcomeandNotification = () => {
  return (
    <View style={styles.welcome}>
      <View>
        {/* avataer comp */}
        <View></View>
        <View>
          <Text>Hi Member</Text>
          <Text>How is your day today</Text>
        </View>
      </View>
      {/* notification comp */}
      <View>
        <Text> Noptofication</Text>
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
});
