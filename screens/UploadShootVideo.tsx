import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const UploadShootVideo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uploadShootVideo}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.setting, styles.headerFlexBox]}>
          <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
            <Image
              style={[styles.musicIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/music.png")}
            />
            <Image
              style={[styles.loaderIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/loader.png")}
            />
          </View>
          <Image
            style={[styles.smileIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/smile.png")}
          />
          <Image
            style={[styles.smileIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/download.png")}
          />
        </View>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("UploadDetail")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
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
        <Image
          style={styles.playCircleIcon}
          contentFit="cover"
          source={require("../assets/playcircle.png")}
        />
        <Image
          style={[styles.refreshCwIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/refreshcw1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  setting: {
    display: "none",
  },
  icon1: {
    display: "none",
  },
  header: {
    width: 360,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 51,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  videoIcon: {
    width: 328,
    height: 449,
    zIndex: 0,
  },
  playCircleIcon: {
    width: 56,
    height: 56,
    zIndex: 1,
    marginTop: 10,
    overflow: "hidden",
  },
  refreshCwIcon: {
    position: "absolute",
    top: 14,
    left: 282,
    zIndex: 2,
    overflow: "hidden",
  },
  content: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
  },
  uploadShootVideo: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default UploadShootVideo;
