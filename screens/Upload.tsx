import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

type UploadType = {
  onClose?: () => void;
};

const Upload = ({ onClose }: UploadType) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.upload, styles.iconLayout]}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <Pressable
          style={styles.arrowLeftLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.autoAddedFrame, styles.autoAddedFrameFlexBox]}>
          <Text style={[styles.logo, styles.timeFlexBox]}>사진</Text>
        </View>
        <Pressable
          style={styles.arrowLeftLayout}
          onPress={() => navigation.navigate("UploadEditingPhoto")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowright.png")}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.videoIcon}
          resizeMode="cover"
          source={require("../assets/video1.png")}
        />
        <View style={[styles.frameParent, styles.headerSpaceBlock]}>
          <View style={[styles.tagPeopleParent, styles.uploadFlexBox]}>
            <Text style={styles.tagPeople} numberOfLines>
              갤러리
            </Text>
            <Image
              style={[styles.chevronDownIcon, styles.arrowLeftLayout]}
              resizeMode="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
          <Image
            style={[styles.chevronDownIcon, styles.arrowLeftLayout]}
            resizeMode="cover"
            source={require("../assets/camera.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.videoParent}>
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
          </View>
          <View style={styles.videoParent}>
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              resizeMode="cover"
              source={require("../assets/video2.png")}
            />
          </View>
        </View>
        <View style={styles.addFollowPopup2}>
          <View style={styles.autoAddedFrameFlexBox}>
            <Text style={[styles.addFollowId, styles.addTypo]}>사진</Text>
            <Text style={[styles.addFollowId1, styles.addTypo]}>동영상</Text>
            <Text style={[styles.addFollowId1, styles.addTypo]}>라이브</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  headerSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    width: 360,
    alignItems: "center",
  },
  autoAddedFrameFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  uploadFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  arrowLeftLayout: {
    height: 24,
    width: 24,
  },
  addTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
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
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    lineHeight: 20,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  logo: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
  },
  autoAddedFrame: {
    alignItems: "center",
    overflow: "hidden",
  },
  header: {
    height: 51,
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  videoIcon: {
    width: 328,
    height: 210,
  },
  tagPeople: {
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    display: "flex",
    width: 45,
    height: 40,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    lineHeight: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  chevronDownIcon: {
    overflow: "hidden",
  },
  tagPeopleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    marginTop: 10,
  },
  videoIcon1: {
    width: 90,
    height: 106,
  },
  videoParent: {
    flexDirection: "row",
  },
  frameGroup: {
    marginTop: 10,
  },
  addFollowId: {
    fontWeight: "900",
    fontFamily: FontFamily.notoSansKRBlack,
    color: Color.whiteGrey,
  },
  addFollowId1: {
    fontWeight: "300",
    fontFamily: FontFamily.notoSansKRLight,
    color: Color.lightgray,
    marginLeft: 8,
  },
  addFollowPopup2: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.textBlack,
    padding: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 10,
    alignItems: "center",
    overflow: "hidden",
  },
  content: {
    paddingBottom: Padding.p_11xl,
    alignItems: "center",
  },
  upload: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.basicWhite,
  },
});

export default Upload;
