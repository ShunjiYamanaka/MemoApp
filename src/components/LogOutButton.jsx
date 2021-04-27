import React from "react";
import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default function LogOutButton() {
  // ログイン画面に遷移
  // コンポーネントの直下におかなければならない
  const navigation = useNavigation();

  function handlePress() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // 画面の履歴を残さないためreset
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗しました");
      });
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
