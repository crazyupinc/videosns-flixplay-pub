import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const EditProfileSelfIntro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileSelfIntro}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Pressable
          style={styles.saveIconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={[styles.autoAddedFrame, styles.headerFlexBox]}>
          <Text style={styles.logo}>자기소개</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          contentFit="cover"
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
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logo: {
    fontSize: FontSize.size_base,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  autoAddedFrame: {
    alignSelf: "stretch",
  },
  saveIcon: {
    overflow: "hidden",
  },
  header: {
    width: 360,
    height: 51,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    backgroundColor: Color.basicWhite,
    flexDirection: "row",
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
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default EditProfileSelfIntro;
