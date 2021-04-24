import React from "react";
import { StyleSheet, View } from "react-native";

// components
import AppBar from "./src/components/AppBar";
import MemoList from "./src/components/MemoList";
import CicleButton from "./src/components/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppBar />
      {/* Main */}
      <MemoList />
      {/* Add Btn */}
      <CicleButton>+</CicleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
