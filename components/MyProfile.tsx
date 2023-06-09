import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet, View } from "react-native";

type MyProfileType = {
  style?: StyleProp<ViewStyle>;
};

const MyProfile = ({ style }: MyProfileType) => {
  return (
    <View style={[styles.myProfile, style]}>
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../assets/user1.png")}
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

export default MyProfile;
