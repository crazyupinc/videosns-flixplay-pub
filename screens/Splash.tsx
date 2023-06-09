import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={styles.logo}>FlixPlay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.istokWebBold,
    color: Color.basicWhite,
    textAlign: "left",
  },
  splash: {
    backgroundColor: Color.black,
    flex: 1,
    width: "100%",
    height: 734,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
