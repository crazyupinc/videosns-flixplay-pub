import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type Live1Type = {
  style?: StyleProp<ViewStyle>;
};

const Live1 = ({ style }: Live1Type) => {
  return (
    <View style={[styles.live, style]}>
      <Text style={styles.live1}>Live</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  live1: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  live: {
    width: 72,
    height: 49,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Live1;
