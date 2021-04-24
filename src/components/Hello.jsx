import React from "react";
import { View, Text, StyleSheet } from "react-native";
// 型を定義するためのライブラリ
import { string, bool, shape } from "prop-types";

function Hello(props) {
  // styleに上書きするstyle情報を設定
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? "!" : ""}`}
      </Text>
    </View>
  );
}

// 型の定義
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

// デフォルトのpropsの値
Hello.defaultProps = {
  // bangはoptonalの値にしたいため、設定がない場合はfalseを指定
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

// 他のjsxで使用するために外部公開のコンポーネントを定義
export default Hello;
