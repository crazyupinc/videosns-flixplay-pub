import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding } from "../GlobalStyles";

type HomeType = {
  style?: StyleProp<ViewStyle>;
};

const Home = ({ style }: HomeType) => {
  return (
    <View style={[styles.home, style]}>
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home.png")}
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

export default Home;
