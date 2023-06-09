import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";

type MyProfile1Type = {
  style?: StyleProp<ViewStyle>;
};

const MyProfile1 = ({ style }: MyProfile1Type) => {
  return (
    <View style={[styles.myProfile, style]}>
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../assets/user.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  myProfile: {
    width: 72,
    height: 49,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default MyProfile1;
