import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={[styles.logo, styles.logoFlexBox]}>FlixPlay</Text>
      <View style={styles.loginForm}>
        <View>
          <Text style={[styles.email, styles.emailTypo]}>이메일</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="이메일을 입력하세요."
            keyboardType="email-address"
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={styles.div1}>
          <Text style={[styles.email, styles.emailTypo]}>비밀번호</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호를 입력하세요."
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry
            placeholderTextColor="#ccc"
          />
        </View>
        <View style={[styles.buttonResetPassword, styles.buttonFlexBox]}>
          <Pressable onPress={() => navigation.navigate("FindPassword")}>
            <Text style={[styles.text, styles.textClr]}>비밀번호 재설정</Text>
          </Pressable>
        </View>
        <Pressable
          style={[styles.buttonLogin, styles.buttonFlexBox]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Main" })
          }
        >
          <Text style={[styles.login1, styles.emailTypo]}>로그인</Text>
        </Pressable>
      </View>
      <View style={[styles.buttonRegister, styles.buttonFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={[styles.text1, styles.textTypo]}>
            <Text style={styles.textClr}>{`계정이 없으신가요? `}</Text>
            <Text style={styles.text3}>가입하기</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  emailTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    width: 302,
    alignItems: "center",
  },
  textClr: {
    color: Color.dimgray_100,
    fontFamily: FontFamily.notoSansKRRegular,
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  logo: {
    fontSize: FontSize.size_22xl,
    lineHeight: 28,
    fontFamily: FontFamily.istokWebBold,
    fontWeight: "700",
    textAlign: "left",
  },
  email: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.black,
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
    flexDirection: "row",
    width: 302,
    alignItems: "center",
    overflow: "hidden",
  },
  div1: {
    marginTop: 16,
  },
  text: {
    textAlign: "center",
    fontSize: FontSize.size_2xs,
  },
  buttonResetPassword: {
    marginTop: 16,
  },
  login1: {
    fontSize: FontSize.size_sm,
    color: Color.basicWhite,
    textAlign: "center",
  },
  buttonLogin: {
    borderRadius: Border.br_base,
    backgroundColor: Color.black,
    padding: Padding.p_3xs,
    marginTop: 16,
  },
  loginForm: {
    marginTop: 61,
    alignItems: "center",
  },
  text3: {
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.black,
    fontWeight: "700",
  },
  text1: {
    textAlign: "center",
  },
  buttonRegister: {
    marginTop: 61,
  },
  login: {
    backgroundColor: Color.basicWhite,
    flex: 1,
    width: "100%",
    paddingHorizontal: Padding.p_7xl,
    paddingTop: Padding.p_16xl,
    paddingBottom: Padding.p_181xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Login;
