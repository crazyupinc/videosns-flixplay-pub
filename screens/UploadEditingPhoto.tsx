import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const UploadEditingPhoto = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.uploadEditingPhoto, styles.iconLayout1]}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={styles.headerFlexBox}>
          <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
            <Image
              style={[styles.musicIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/music.png")}
            />
            <Image
              style={[styles.loaderIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/loader.png")}
            />
          </View>
          <Image
            style={[styles.smileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/smile.png")}
          />
          <Image
            style={[styles.smileIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/download.png")}
          />
        </View>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.navigate("UploadDetail")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/arrowright.png")}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.videoIcon}
          contentFit="cover"
          source={require("../assets/video.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  musicIcon: {
    overflow: "hidden",
  },
  loaderIcon: {
    marginLeft: 10,
    overflow: "hidden",
  },
  autoAddedFrame: {
    height: 51,
    flexDirection: "row",
    overflow: "hidden",
  },
  smileIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  header: {
    width: 360,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    height: 51,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  videoIcon: {
    width: 328,
    height: 449,
  },
  content: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
  },
  uploadEditingPhoto: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default UploadEditingPhoto;
