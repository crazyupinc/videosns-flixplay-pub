import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FindPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findPassword}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
      </View>
      <Text style={[styles.logo, styles.timeFlexBox]}>FlixPlay</Text>
      <View style={styles.div}>
        <View>
          <Text style={styles.timeFlexBox}>
            <Text
              style={[styles.text, styles.textTypo]}
            >{`이메일을 확인해주세요.
`}</Text>
            <Text
              style={styles.text1}
            >{`입력하신 이메일 주소로 임시 비밀번호를 발송해 
드립니다.`}</Text>
          </Text>
          <View style={styles.div1}>
            <Text style={[styles.email, styles.textTypo]}>이메일</Text>
            <TextInput
              style={[styles.inputBox, styles.buttonFlexBox]}
              placeholder="이메일을 입력해주세요"
              keyboardType="email-address"
              placeholderTextColor="#ccc"
            />
          </View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonFlexBox]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.next, styles.textTypo]}>다음</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  buttonFlexBox: {
    flexDirection: "row",
    width: 302,
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
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    position: "absolute",
  },
  statusBarLight: {
    width: 360,
    height: 44,
    backgroundColor: Color.basicWhite,
  },
  logo: {
    fontSize: FontSize.size_22xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.istokWebBold,
    marginTop: 61,
  },
  text: {
    fontSize: 18,
  },
  text1: {
    fontFamily: FontFamily.notoSansKRRegular,
    fontSize: FontSize.size_smi,
  },
  email: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  inputBox: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    borderColor: "#e1e1e1",
    borderWidth: 1,
    height: 42,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_12xs,
    marginTop: 5,
    overflow: "hidden",
    width: 302,
  },
  div1: {
    marginTop: 24,
  },
  next: {
    fontSize: FontSize.size_sm,
    color: Color.basicWhite,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_base,
    backgroundColor: Color.lightLabelPrimary,
    padding: Padding.p_3xs,
    justifyContent: "center",
    marginTop: 16,
  },
  div: {
    marginTop: 61,
  },
  findPassword: {
    flex: 1,
    width: "100%",
    height: 637,
    paddingHorizontal: Padding.p_7xl,
    paddingBottom: Padding.p_181xl,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default FindPassword;
