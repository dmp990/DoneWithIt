import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => {
    alert("tapped!!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 150, height: 70 }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
