import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const MyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.myPage, styles.iconLayout]}>
      <View style={[styles.header, styles.frameLayout1]}>
        <Pressable
          style={styles.menuIconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={styles.autoAddedFrame}>
          <Text style={[styles.logo, styles.idTypo]}>crazyupinc</Text>
        </View>
        <Image
          style={[styles.menuIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
      </View>
      <View style={[styles.authorParent, styles.buttonsSpaceBlock1]}>
        <View style={styles.homeFlexBox}>
          <View style={[styles.icon1, styles.icon1Border]}>
            <Image
              style={styles.image9Icon}
              contentFit="cover"
              source={require("../assets/image-9.png")}
            />
          </View>
          <Text style={[styles.id, styles.idTypo]}>@crazyupinc</Text>
        </View>
        <View style={styles.buttonsSpaceBlock}>
          <View style={styles.groupLayout}>
            <Text style={[styles.text, styles.idTypo]}>0</Text>
            <Text style={[styles.text1, styles.text1Typo]}>팔로잉</Text>
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text, styles.idTypo]}>0</Text>
            <Text style={[styles.text1, styles.text1Typo]}>팔로워</Text>
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text, styles.idTypo]}>0</Text>
            <Text style={[styles.text1, styles.text1Typo]}>좋아요</Text>
          </View>
        </View>
        <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
          <Pressable
            style={[styles.uploadButton, styles.buttonLayout]}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={[styles.upload, styles.text1Typo]}>프로필 편집</Text>
          </Pressable>
          <View style={[styles.temporaryStorageButton, styles.buttonLayout]}>
            <Text style={[styles.temporaryStorage, styles.text1Typo]}>
              임시저장
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={[styles.frameContainer, styles.frameLayout1]}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-62.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-63.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-64.png")}
          />
        </View>
        <View style={[styles.frameView, styles.frameLayout1]}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-62.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-63.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/frame-64.png")}
          />
        </View>
      </View>
      <View style={styles.navigationBar}>
        <View style={[styles.home, styles.homeLayout]}>
          <Image
            style={[styles.menuIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/home.png")}
          />
        </View>
        <View style={[styles.live, styles.homeLayout]}>
          <Text style={styles.live1}>Live</Text>
        </View>
        <Image
          style={[styles.uploadIcon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/upload.png")}
        />
        <View style={[styles.live, styles.homeLayout]}>
          <Image
            style={[styles.menuIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/gift.png")}
          />
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
  frameLayout1: {
    width: 360,
    flexDirection: "row",
  },
  idTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.black,
  },
  menuIconLayout: {
    height: 24,
    width: 24,
  },
  buttonsSpaceBlock1: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
  },
  icon1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  text1Typo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: 11,
  },
  groupLayout: {
    height: 39,
    width: 31,
    alignItems: "center",
  },
  buttonsSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonLayout: {
    height: 32,
    width: 160,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    height: 162,
    width: 119,
    overflow: "hidden",
  },
  homeLayout: {
    width: 72,
    height: 49,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  logo: {
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  autoAddedFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  menuIcon: {
    overflow: "hidden",
  },
  header: {
    height: 51,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  image9Icon: {
    width: 116,
    height: 74,
  },
  icon1: {
    borderRadius: Border.br_71xl,
    borderColor: "#ccc",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  id: {
    marginTop: 6,
    textAlign: "center",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.black,
  },
  text1: {
    marginTop: 4,
    textAlign: "center",
    color: Color.black,
  },
  group: {
    marginLeft: 60,
  },
  upload: {
    color: Color.basicWhite,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: Color.black,
    padding: Padding.p_3xs,
  },
  temporaryStorage: {
    color: Color.gray_100,
    textAlign: "left",
  },
  temporaryStorageButton: {
    borderColor: "#000",
    display: "none",
    marginLeft: 8,
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttons: {
    width: 328,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
  },
  authorParent: {
    alignItems: "center",
  },
  frameItem: {
    marginLeft: 2,
  },
  frameContainer: {
    flexDirection: "row",
  },
  frameView: {
    marginTop: 2,
    flexDirection: "row",
  },
  home: {
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  live1: {
    fontFamily: FontFamily.notoSansKRRegular,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
  },
  live: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  uploadIcon: {
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  navigationBar: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    height: 49,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.basicWhite,
  },
  myPage: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default MyPage;
