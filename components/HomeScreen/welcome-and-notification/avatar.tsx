import { Image, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "../../Themed";
import AvaterPaceholderImg from "../../../assets/images/avatar-male.png";
const Avatar = () => {
  return (
    <View style={styles.container}>
      {/* avataer comp */}
      <View style={styles.avatar}>
        <Image
          source={AvaterPaceholderImg}
          style={{
            objectFit: "contain",
          }}
        />
      </View>
      <View>
        <Text>Hi Member</Text>
        <Text>How is your day today</Text>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#dfdfdf",
    // alignContent: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
