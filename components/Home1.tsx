import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

type Home1Type = {
  style?: StyleProp<ViewStyle>;
};

const Home1 = ({ style }: Home1Type) => {
  return (
    <View style={[styles.home, style]}>
      <Image
        style={styles.homeIcon}
        resizeMode="cover"
        source={require("../assets/home1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    width: 72,
    height: 49,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home1;
