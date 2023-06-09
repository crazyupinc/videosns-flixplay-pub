import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={[styles.splash, styles.logoFlexBox]}>
      <Text style={[styles.logo, styles.logoFlexBox]}>FlixPlay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 50,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.istokWebBold,
    color: Color.basicWhite,
    textAlign: "center",
    display: "flex",
    width: 197,
    height: 67,
  },
  splash: {
    backgroundColor: Color.lightLabelPrimary,
    flex: 1,
    width: "100%",
    height: 734,
    overflow: "hidden",
  },
});

export default Splash;
