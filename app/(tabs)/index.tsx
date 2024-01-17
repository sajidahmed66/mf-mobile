import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import Constants from "expo-constants";
import Colors from "../../constants/Colors";
import RequestCard from "../../components/HomeScreen/RequestCard";
import WelcomeandNotification from "../../components/HomeScreen/welcome-and-notification";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.statusBarSafeArea} />
        {/* Top welcome Component */}
        <WelcomeandNotification />
        {/* end */}
        {/* workout section */}
        <RequestCard componentType="workout" requestHandler={() => {}} />
        <RequestCard componentType="diet" requestHandler={() => {}} />
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
  statusBarSafeArea: {
    height: Constants.statusBarHeight,
    width: "100%",
  },
});
