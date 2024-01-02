import { Image, Pressable, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Constants from "expo-constants";
import workoutImg from "../../assets/images/workout-req-placeholder.jpg";
import Colors from "../../constants/Colors";
import ThreeDotIcon from "../../components/icons/ThreeDotIcon";
export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.statusBarSafeArea} />
        {/* Top welcome Component */}
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
        {/* end */}
        {/* workout section */}
        {/* section title */}
        <>
          <View style={styles.wContainer}>
            {/* workout title section */}
            <View style={styles.wTitle}>
              <View>
                <Text>Your Workouts</Text>
              </View>
              <View>
                <Text>See details </Text>
              </View>
            </View>
            {/* request card section */}
            <View style={styles.wCardContainer}>
              <View style={styles.wImageTitleSection}>
                <View style={styles.wCardImage}>
                  <Image
                    source={workoutImg}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </View>
                <View style={styles.wCardTitle}>
                  <Text style={styles.wCardTitleText1}>No Workout</Text>
                  <Text style={styles.wCardTitleText2}>Plane Yet</Text>
                </View>
              </View>
              <View style={styles.wCardPressableBtn}>
                <Text style={styles.wCardPressableBtnText}> Request Plan</Text>
              </View>
            </View>
          </View>
          {/*  end */}
          {/* next 5 days workout calender section  */}
          <View style={styles.wNextFiveDayContainer}>
            <Text style={styles.wNextFiveDayTitleText}>
              Your Next 5 Days Workout
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
        </>

        {/* end */}
        {/* section end */}
        {/* diet and workout sectio are basicall same comp we will introduce resuability */}
        {/* Diet Section start */}

        {/* diet section end */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
  },
  layput: {
    borderColor: "white",
    borderWidth: 2,
    height: "100%",
    width: "100%",
  },
  statusBarSafeArea: {
    height: Constants.statusBarHeight,
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
    borderRadius: 5,
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
});
