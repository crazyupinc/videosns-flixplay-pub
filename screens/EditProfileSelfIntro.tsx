import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const EditProfileSelfIntro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileSelfIntro}>
      <View style={[styles.statusBarLight, styles.headerLayout]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.saveIconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
          <Text style={styles.logo}>자기소개</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          resizeMode="cover"
          source={require("../assets/save.png")}
        />
      </View>
      <View style={styles.setting}>
        <View style={styles.tagPeopleWrapper}>
          <Text style={[styles.tagPeople, styles.tagTypo]} numberOfLines>
            자기소개
          </Text>
        </View>
        <Text style={[styles.tagPeople1, styles.tagTypo]}>0/80</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  saveIconLayout: {
    height: 24,
    width: 24,
  },
  tagTypo: {
    width: 328,
    display: "flex",
    color: Color.lightgray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 20,
    alignItems: "center",
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
    textAlign: "left",
    color: Color.lightLabelPrimary,
    lineHeight: 20,
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  autoAddedFrame: {
    alignSelf: "stretch",
  },
  saveIcon: {
    overflow: "hidden",
  },
  header: {
    height: 51,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  tagPeople: {
    height: 17,
    overflow: "hidden",
  },
  tagPeopleWrapper: {
    borderStyle: "solid",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    height: 57,
  },
  tagPeople1: {
    marginTop: 10,
  },
  setting: {
    paddingBottom: Padding.p_281xl,
  },
  editProfileSelfIntro: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.basicWhite,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfileSelfIntro;
