import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const EditProfileName1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileName}>
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
          <Text style={styles.logo}>이름</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          resizeMode="cover"
          source={require("../assets/save.png")}
        />
      </View>
      <View style={styles.setting}>
        <View style={styles.tagPeopleParent}>
          <Text style={styles.tagTypo} numberOfLines>
            이름
          </Text>
          <Text style={styles.tagPeople1} numberOfLines={2}>
            crazyupinc
          </Text>
        </View>
        <Text style={[styles.tagPeople2, styles.tagTypo]} numberOfLines>
          이름은 14일에 한 번만 변경할 수 있습니다.
        </Text>
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
    height: 17,
    color: Color.lightgray,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    width: 328,
    display: "flex",
    textAlign: "left",
    lineHeight: 20,
    alignItems: "center",
    overflow: "hidden",
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
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
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
  tagPeople1: {
    height: 40,
    width: 328,
    display: "flex",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    alignItems: "center",
    overflow: "hidden",
  },
  tagPeopleParent: {
    borderStyle: "solid",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  tagPeople2: {
    marginTop: 10,
  },
  setting: {
    paddingBottom: Padding.p_281xl,
  },
  editProfileName: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.basicWhite,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfileName1;
