import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const EditProfileName = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileName}>
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
          <Text style={styles.logo}>FlixPlay ID</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          contentFit="cover"
          source={require("../assets/save.png")}
        />
      </View>
      <View style={styles.setting}>
        <View style={styles.tagPeopleParent}>
          <Text style={[styles.tagPeople, styles.tagTypo]} numberOfLines>
            FlixPlay ID
          </Text>
          <Text style={[styles.tagPeople1, styles.tagTypo]} numberOfLines={2}>
            crazyupinc
          </Text>
        </View>
        <Text
          style={[styles.tagPeople2, styles.tagTypo]}
        >{`FlixPlay ID는 영문, 숫자, 밑줄 및 마침표만 포함할 수 있습니다. 
14일마다 한 번씩 변경할 수 있습니다.`}</Text>
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
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.black,
    fontSize: FontSize.size_base,
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
    color: Color.lightgray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    width: 328,
    display: "flex",
    overflow: "hidden",
  },
  tagPeople1: {
    height: 40,
    width: 328,
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_base,
    overflow: "hidden",
  },
  tagPeopleParent: {
    borderStyle: "solid",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  tagPeople2: {
    marginTop: 10,
    color: Color.lightgray,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    width: 328,
    display: "flex",
  },
  setting: {
    paddingBottom: Padding.p_281xl,
  },
  editProfileName: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default EditProfileName;
