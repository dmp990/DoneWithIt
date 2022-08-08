import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import NameScreen from "./screens/NameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
          <Stack.Screen name="Name" component={NameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
