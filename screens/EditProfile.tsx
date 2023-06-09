import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.editProfile, styles.iconLayout]}>
      <View style={[styles.statusBarLight, styles.headerLayout]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.saveIconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
          <Text style={[styles.logo, styles.logoTypo]}>프로필 편집</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          resizeMode="cover"
          source={require("../assets/save.png")}
        />
      </View>
      <View style={styles.authorWrapper}>
        <View style={styles.icon1FlexBox}>
          <View style={[styles.icon1, styles.icon1Border]}>
            <Image
              style={styles.image9Icon}
              resizeMode="cover"
              source={require("../assets/image-9.png")}
            />
          </View>
          <Text style={[styles.id, styles.tagTypo]}>사진 변경</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={[styles.tagPeople, styles.tagLayout]} numberOfLines>
            이름
          </Text>
          <Pressable
            numberOfLines={2}
            onPress={() => navigation.navigate("EditProfileName1")}
          >
            <Text style={[styles.crazyupinc, styles.textLayout]}>
              crazyupinc
            </Text>
          </Pressable>
        </View>
        <View style={[styles.tagPeopleGroup, styles.icon1Border]}>
          <Text style={[styles.tagPeople2, styles.tagLayout]} numberOfLines>
            FlixPlay ID
          </Text>
          <Pressable
            numberOfLines={2}
            onPress={() => navigation.navigate("EditProfileName")}
          >
            <Text style={[styles.crazyupinc, styles.textLayout]}>
              crazyupinc
            </Text>
          </Pressable>
        </View>
        <View style={[styles.tagPeopleGroup, styles.icon1Border]}>
          <Text style={[styles.tagPeople2, styles.tagLayout]} numberOfLines>
            자기소개
          </Text>
          <Pressable
            numberOfLines
            onPress={() => navigation.navigate("EditProfileSelfIntro")}
          >
            <Text style={[styles.text, styles.textLayout]}>
              자기소개 추가하기
            </Text>
          </Pressable>
        </View>
        <View style={styles.frameView}>
          <Text style={[styles.tagPeople2, styles.tagLayout]} numberOfLines>
            SNS 링크 추가
          </Text>
          <Text style={[styles.tagPeople7, styles.textLayout]} numberOfLines>
            Instagram
          </Text>
          <Text style={[styles.tagPeople7, styles.textLayout]} numberOfLines>
            Youtube
          </Text>
          <Text style={[styles.tagPeople7, styles.textLayout]} numberOfLines>
            Twitter
          </Text>
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
  headerLayout: {
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  logoTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  saveIconLayout: {
    height: 24,
    width: 24,
  },
  icon1Border: {
    borderColor: "#ccc",
    borderStyle: "solid",
  },
  tagTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  tagLayout: {
    height: 17,
    width: 328,
    display: "flex",
    color: Color.lightgray,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  textLayout: {
    height: 40,
    width: 328,
    display: "flex",
    textAlign: "left",
    color: Color.lightLabelPrimary,
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
    lineHeight: 20,
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
  image9Icon: {
    width: 116,
    height: 74,
  },
  icon1: {
    borderRadius: Border.br_71xl,
    borderWidth: 1,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  id: {
    textAlign: "center",
    marginTop: 6,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    color: Color.lightLabelPrimary,
  },
  icon1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  authorWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
  },
  tagPeople: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  crazyupinc: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  tagPeople2: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  tagPeopleGroup: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  text: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    lineHeight: 20,
  },
  tagPeople7: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    lineHeight: 20,
  },
  frameView: {
    marginTop: 10,
  },
  editProfile: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default EditProfile;
