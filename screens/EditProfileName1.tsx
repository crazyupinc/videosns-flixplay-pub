import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const EditProfileName1 = () => {
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
          <Text style={styles.logo}>이름</Text>
        </View>
        <Image
          style={[styles.saveIcon, styles.saveIconLayout]}
          contentFit="cover"
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
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    width: 328,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  logo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
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
  tagPeople1: {
    height: 40,
    width: 328,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
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
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default EditProfileName1;
