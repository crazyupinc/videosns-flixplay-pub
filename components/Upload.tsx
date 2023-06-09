import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

type UploadIconType = {
  style?: StyleProp<ViewStyle>;
};

const UploadIcon = ({ style }: UploadIconType) => {
  return (
    <Image
      style={[styles.uploadIcon, style]}
      resizeMode="cover"
      source={require("../assets/upload.png")}
    />
  );
};

const styles = StyleSheet.create({
  uploadIcon: {
    borderRadius: Border.br_5xs,
    width: 72,
    height: 49,
    overflow: "hidden",
  },
});

export default UploadIcon;
