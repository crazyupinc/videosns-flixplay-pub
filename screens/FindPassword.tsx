import * as React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FindPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.findPassword}>
      <Text style={[styles.logo, styles.logoFlexBox]}>FlixPlay</Text>
      <View style={styles.div}>
        <View>
          <Text style={styles.logoFlexBox}>
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
  logoFlexBox: {
    textAlign: "left",
    color: Color.black,
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
  logo: {
    fontSize: FontSize.size_22xl,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.istokWebBold,
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
    backgroundColor: Color.black,
    padding: Padding.p_3xs,
    justifyContent: "center",
    marginTop: 16,
  },
  div: {
    marginTop: 61,
  },
  findPassword: {
    backgroundColor: Color.basicWhite,
    flex: 1,
    width: "100%",
    height: 637,
    paddingHorizontal: Padding.p_7xl,
    paddingTop: Padding.p_16xl,
    paddingBottom: Padding.p_181xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default FindPassword;
