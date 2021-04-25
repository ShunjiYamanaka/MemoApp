import React from "react";
import { View, StyleSheet } from "react-native";

// components
import MemoList from "../components/MemoList";
import CicleButton from "../components/CircleButton";

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      {/* Main */}
      <MemoList />
      {/* Add Btn */}
      <CicleButton
        name="plus"
        onPress={() => {
          navigation.navigate("MemoDetail");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
