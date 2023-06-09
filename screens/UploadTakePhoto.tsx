import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const UploadTakePhoto = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uploadTakePhoto}>
      <View style={[styles.statusBarLight, styles.headerLayout1]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.setting, styles.headerFlexBox]}>
          <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
            <Image
              style={[styles.musicIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/music.png")}
            />
            <Image
              style={[styles.loaderIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/loader.png")}
            />
          </View>
          <Image
            style={[styles.smileIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/smile.png")}
          />
          <Image
            style={[styles.smileIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/download.png")}
          />
        </View>
        <Pressable
          style={styles.iconLayout1}
          onPress={() => navigation.navigate("UploadDetail")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowright.png")}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.videoIcon}
          resizeMode="cover"
          source={require("../assets/video.png")}
        />
        <Image
          style={styles.discIcon}
          resizeMode="cover"
          source={require("../assets/disc.png")}
        />
        <Image
          style={[styles.refreshCwIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/refreshcw1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout1: {
    width: 360,
    backgroundColor: Color.basicWhite,
  },
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
  icons: {
    top: 18,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  time: {
    marginTop: -8,
    top: "50%",
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
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
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    height: 51,
    flexDirection: "row",
    overflow: "hidden",
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  videoIcon: {
    width: 328,
    height: 449,
    zIndex: 0,
  },
  discIcon: {
    width: 56,
    height: 56,
    zIndex: 1,
    marginTop: 10,
    overflow: "hidden",
  },
  refreshCwIcon: {
    top: 14,
    left: 282,
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
  },
  content: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
  },
  uploadTakePhoto: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default UploadTakePhoto;
