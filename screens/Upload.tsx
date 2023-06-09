import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type UploadType = {
  onClose?: () => void;
};

const Upload = ({ onClose }: UploadType) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.upload, styles.iconLayout]}>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <Pressable
          style={styles.arrowLeftLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.autoAddedFrame, styles.autoAddedFrameFlexBox]}>
          <Text style={styles.logo}>사진</Text>
        </View>
        <Pressable
          style={styles.arrowLeftLayout}
          onPress={() => navigation.navigate("UploadEditingPhoto")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowright.png")}
          />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.videoIcon}
          contentFit="cover"
          source={require("../assets/video1.png")}
        />
        <View style={[styles.frameParent, styles.headerSpaceBlock]}>
          <View style={[styles.tagPeopleParent, styles.uploadFlexBox]}>
            <Text style={styles.tagPeople} numberOfLines>
              갤러리
            </Text>
            <Image
              style={[styles.chevronDownIcon, styles.arrowLeftLayout]}
              contentFit="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
          <Image
            style={[styles.chevronDownIcon, styles.arrowLeftLayout]}
            contentFit="cover"
            source={require("../assets/camera.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.videoParent}>
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
          </View>
          <View style={styles.videoParent}>
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
              source={require("../assets/video2.png")}
            />
            <Image
              style={styles.videoIcon1}
              contentFit="cover"
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
  headerSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 360,
    flexDirection: "row",
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  logo: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    textAlign: "left",
    color: Color.black,
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
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    display: "flex",
    width: 45,
    height: 40,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
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
