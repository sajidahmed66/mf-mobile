import {
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { Text, View } from "@/components/Themed";
import workoutImg from "@/assets/images/workout-req-placeholder.jpg";
import dietImg from "@/assets/images/diet-placeholder-img.jpg";
import Colors from "@/constants/Colors";
import ThreeDotIcon from "@/components/icons/ThreeDotIcon";

export interface RequestCardProps {
  componentType: "workout" | "diet";
  requestHandler: (data: any) => void;
}

const RequestCard: FC<RequestCardProps> = ({ componentType }) => {
  return (
    <>
      <View style={styles.wContainer}>
        {/* workout title section */}
        {/* section title */}
        <View style={styles.wTitle}>
          <View>
            <Text>
              Your {componentType === "workout" ? "Workouts" : "Diets"}
            </Text>
          </View>
          {/* needs to be a pressable */}
          <View>
            <Text>See details </Text>
          </View>
        </View>
        {/* request card section */}
        <View style={styles.wCardContainer}>
          <View style={styles.wImageTitleSection}>
            <View style={styles.wCardImage}>
              <Image
                source={componentType === "workout" ? workoutImg : dietImg}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </View>

            <View style={styles.wCardTitle}>
              <Text style={styles.wCardTitleText1}>
                No {componentType === "workout" ? "Workout" : "Diet"}
              </Text>
              <Text style={styles.wCardTitleText2}>Plane Yet</Text>
            </View>
          </View>

          {/*  */}
          <TouchableOpacity onPress={() => console.log("press")}>
            <View
              style={
                componentType === "workout"
                  ? styles.wCardPressableBtn
                  : styles.dCardPressableBtn
              }
            >
              <Text style={styles.wCardPressableBtnText}>Request Plan</Text>
            </View>
          </TouchableOpacity>

          {/*  */}
        </View>
      </View>
      {/*  end */}
      {/* next 5 days workout calender section  */}
      <View style={styles.wNextFiveDayContainer}>
        <Text style={styles.wNextFiveDayTitleText}>
          Your Next 5 Days{" "}
          {componentType === "workout" ? "workout plan" : "diet plan"}
        </Text>
        <View style={styles.wNextWorkOutCellCalContainer}>
          {[1, 2, 3, 4, 5].map((i) => (
            <View key={i} style={styles.wNextWorkOutCellCal}>
              <Text style={styles.wNextWorkOutCellText}>Nov 13</Text>
              <ThreeDotIcon />
            </View>
          ))}
        </View>
      </View>

      {/* Modal Component */}
      <Modal visible={false} animationType="fade" transparent={true}>
        <View style={styles.wModal}>
          <View style={styles.wModalContainer}>
            <Text>Make a Request for Exercise</Text>
            <Text>Do you want to add something</Text>
            <TextInput />
            <View>
              <View>
                <Text>cancle</Text>
              </View>
              <View>
                <Text>Submit</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  wContainer: {
    width: "100%",
    marginTop: 20,
    height: "auto",
  },
  wTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "auto",
  },
  wCardContainer: {
    borderRadius: 8,
    width: "100%",
    height: 174,
    padding: 10,
    backgroundColor: "#FFF",
    // borderWidth: 2,
    // borderColor: "black",
    marginTop: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
  wImageTitleSection: {
    width: "100%",
    height: 112,
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  wCardImage: {
    width: "50%",
    height: "100%",
  },
  wCardTitle: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  wCardTitleText1: {
    fontSize: 22,
    color: Colors.light.secondary,
    fontWeight: "900",
  },
  wCardTitleText2: {
    fontSize: 22,
    color: Colors.light.darker,
    fontWeight: "900",
  },
  wCardPressableBtn: {
    height: 42,
    width: "100%",
    backgroundColor: Colors.light.secondary,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dCardPressableBtn: {
    height: 42,
    width: "100%",
    backgroundColor: Colors.light.primary,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wCardPressableBtnText: {
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Colors.light.darker,
  },
  dCardPressableBtnText: {
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Colors.light.darker,
  },
  //
  wNextFiveDayContainer: {
    borderRadius: 8,
    width: "100%",
    height: 120,
    padding: 15,
    backgroundColor: "#FFF",
    // borderWidth: 2,
    // borderColor: "black",
    marginTop: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    gap: 10,
  },
  wNextFiveDayTitleText: {
    fontSize: 12,
    fontWeight: "600",
  },
  wNextWorkOutCellCalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wNextWorkOutCellCal: {
    width: 52,
    height: 58,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 6,
    padding: 5,
  },
  wNextWorkOutCellText: {
    fontSize: 12,
    fontWeight: "600",
  },

  //  modal
  wModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(115, 115, 115, 0.28)",
    height: "100%",
    // backdropFilter: ,
  },
  wModalContainer: {
    height: "50%",
    width: "100%",
    borderRadius: 8,
    padding: 20,
  },
});
