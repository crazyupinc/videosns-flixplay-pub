import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const MenberPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menberPage, styles.iconLayout1]}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.header}>
        <Pressable
          style={styles.iconLayout}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/arrowleft.png")}
          />
        </Pressable>
        <View style={styles.autoAddedFrame}>
          <Text style={styles.logo}>jennylove</Text>
        </View>
        <Image
          style={[styles.share2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/share2.png")}
        />
      </View>
      <View style={styles.authorParent}>
        <View style={styles.authorFlexBox}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon3.png")}
          />
          <Text style={[styles.id, styles.idTypo]}>@jennylove</Text>
        </View>
        <View style={styles.buttonsSpaceBlock}>
          <View style={styles.groupLayout}>
            <Text style={[styles.text, styles.idTypo]}>3</Text>
            <Text style={[styles.text1, styles.text1Typo]}>팔로잉</Text>
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text, styles.idTypo]}>8199</Text>
            <Text style={[styles.text1, styles.text1Typo]}>팔로워</Text>
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text, styles.idTypo]}>331.5K</Text>
            <Text style={[styles.text1, styles.text1Typo]}>좋아요</Text>
          </View>
        </View>
        <View style={[styles.buttons, styles.buttonsSpaceBlock]}>
          <TouchableHighlight
            style={[styles.uploadButton, styles.authorFlexBox]}
            underlayColor="#ccc"
            activeOpacity={0.2}
            onPress={() => {}}
          >
            <Text style={[styles.upload, styles.text1Typo]}>팔로우</Text>
          </TouchableHighlight>
          <Image
            style={[styles.sendIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/send2.png")}
          />
        </View>
      </View>
      <View>
        <View style={styles.frameContainer}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/frame-621.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame-631.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame-641.png")}
          />
        </View>
        <View style={styles.frameView}>
          <Image
            style={styles.frameLayout}
            resizeMode="cover"
            source={require("../assets/frame-622.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame-632.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/frame-642.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  idTypo: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.lightLabelPrimary,
  },
  text1Typo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: 11,
    textAlign: "center",
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
  authorFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameLayout: {
    height: 162,
    width: 119,
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
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
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
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  autoAddedFrame: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  share2Icon: {
    overflow: "hidden",
  },
  header: {
    height: 51,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 360,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  icon1: {
    borderRadius: Border.br_71xl,
    width: 80,
    height: 80,
    overflow: "hidden",
  },
  id: {
    marginTop: 6,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  text: {
    fontSize: FontSize.size_smi,
  },
  text1: {
    marginTop: 4,
    color: Color.lightLabelPrimary,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: 11,
  },
  group: {
    marginLeft: 60,
  },
  upload: {
    color: Color.basicWhite,
  },
  uploadButton: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.lightLabelPrimary,
    width: 160,
    height: 32,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  sendIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  buttons: {
    width: 328,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  authorParent: {
    alignItems: "center",
  },
  frameItem: {
    marginLeft: 2,
  },
  frameContainer: {
    flexDirection: "row",
    width: 360,
  },
  frameView: {
    marginTop: 2,
    flexDirection: "row",
    width: 360,
  },
  menberPage: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default MenberPage;
