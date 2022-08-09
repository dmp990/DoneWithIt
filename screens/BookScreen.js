import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

function BookScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Books Screen" />
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Go back to Home Screen" />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Take me back to Home
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
  },
  card: {
    width: "90%",
  },
});

export default BookScreen;
