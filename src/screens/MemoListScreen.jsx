import React from "react";
import { View, StyleSheet } from "react-native";

// components
import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CicleButton from "../components/CircleButton";

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppBar />
      {/* Main */}
      <MemoList />
      {/* Add Btn */}
      <CicleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
