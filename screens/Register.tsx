import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.register, styles.registerLayout]}>
      <StatusBar style={styles.loginPopupLayout} barStyle="default" />
      <View style={[styles.loginPopup, styles.loginPopupLayout]}>
        <Text style={styles.title}>FlixPlay</Text>
        <View style={styles.snsLogin}>
          <Pressable
            style={styles.buttonFacebook}
            onPress={() =>
              Linking.openURL(
                "https://myaccount.google.com/?utm_source=OGB&utm_medium=app"
              )
            }
          >
            <Text style={[styles.startWithFacebook, styles.startTypo]}>
              Google로 가입하기
            </Text>
          </Pressable>
          <Pressable
            style={[styles.buttonFacebook1, styles.buttonFlexBox]}
            onPress={() =>
              Linking.openURL("https://www.facebook.com/login/?locale=ko_KR")
            }
          >
            <Text style={[styles.startWithFacebook, styles.startTypo]}>
              Facebook으로 가입하기
            </Text>
          </Pressable>
          <Pressable
            style={[styles.buttonKakao, styles.buttonFlexBox]}
            onPress={() =>
              Linking.openURL(
                "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fcs.kakao.com%2Fhelps%3Fservice%3D8%26locale%3Dko%26category%3D25#login"
              )
            }
          >
            <Text style={[styles.startWithKakao, styles.startTypo]}>
              카카오톡으로 가입하기
            </Text>
          </Pressable>
          <Pressable
            style={[styles.buttonNaver, styles.buttonFlexBox]}
            onPress={() =>
              Linking.openURL(
                "https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D0%26ie%3Dutf8%26query%3D%25EB%2584%25A4%25EC%259D%25B4%25EB%25B2%2584%2B%25EB%25A1%259C%25EA%25B7%25B8%25EC%259D%25B8"
              )
            }
          >
            <Text style={[styles.startWithKakao, styles.startTypo]}>
              네이버로 가입하기
            </Text>
          </Pressable>
        </View>
        <Pressable style={styles.x} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/x.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerLayout: {
    height: 637,
    alignItems: "center",
    overflow: "hidden",
  },
  loginPopupLayout: {
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  startTypo: {
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  buttonFlexBox: {
    marginTop: 9,
    justifyContent: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: 302,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.size_22xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.istokWebBold,
    textAlign: "left",
    zIndex: 0,
    color: Color.lightLabelPrimary,
  },
  startWithFacebook: {
    color: Color.basicWhite,
  },
  buttonFacebook: {
    backgroundColor: "#8f8f8f",
    justifyContent: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: 302,
    borderRadius: Border.br_base,
    alignItems: "center",
  },
  buttonFacebook1: {
    backgroundColor: "#3351a3",
  },
  startWithKakao: {
    color: Color.lightLabelPrimary,
  },
  buttonKakao: {
    backgroundColor: "#fee20b",
  },
  buttonNaver: {
    backgroundColor: "#44c234",
  },
  snsLogin: {
    height: 236,
    justifyContent: "flex-end",
    zIndex: 1,
    marginTop: 61,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  x: {
    position: "absolute",
    left: 330,
    top: 6,
    width: 24,
    height: 24,
    zIndex: 2,
  },
  loginPopup: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: 35,
    alignItems: "center",
    overflow: "hidden",
    height: 637,
  },
  register: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.basicWhite,
    height: 637,
  },
});

export default Register;
