import * as React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

type CommentPopupType = {
  onClose?: () => void;
};

const CommentPopup = ({ onClose }: CommentPopupType) => {
  return (
    <View style={styles.commentPopup}>
      <View style={styles.comment1}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <View style={styles.div}>
          <View style={styles.div1}>
            <Text style={styles.id}>fan</Text>
            <Text style={[styles.time, styles.timeTypo]}>30분</Text>
          </View>
          <Text style={[styles.comment, styles.timeTypo]}>
            She is such a talented performer! Her stage presence is amazing.
          </Text>
        </View>
      </View>
      <View style={styles.comment2FlexBox}>
        <View style={[styles.icon1, styles.icon1Border]} />
        <View style={styles.div}>
          <View style={styles.div1}>
            <Text style={styles.id}>jenny-love</Text>
            <Text style={[styles.time, styles.timeTypo]}>28분</Text>
          </View>
          <Text style={[styles.comment, styles.timeTypo]}>
            Her charm and charisma captivate audiences everywhere. She truly
            owns the stage
          </Text>
        </View>
      </View>
      <View style={styles.comment2FlexBox}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/div.png")}
        />
        <View style={styles.div}>
          <View style={styles.div1}>
            <Text style={styles.id}>fanfany</Text>
            <Text style={[styles.time, styles.timeTypo]}>25분</Text>
          </View>
          <Text style={[styles.comment, styles.timeTypo]}>
            She is such a talented performer! Her stage presence is amazing.
          </Text>
        </View>
      </View>
      <View style={styles.comment2FlexBox}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/div1.png")}
        />
        <View style={styles.div}>
          <View style={styles.div1}>
            <Text style={styles.id}>1324</Text>
            <Text style={[styles.time, styles.timeTypo]}>20분</Text>
          </View>
          <Text style={[styles.comment, styles.timeTypo]}>
            Her charm and charisma captivate audiences everywhere. She truly
            owns the stage
          </Text>
        </View>
      </View>
      <View style={[styles.inputArea, styles.comment2FlexBox]}>
        <TextInput
          style={[styles.inputBox, styles.icon1Border]}
          placeholder="댓글을 입력하세요."
          keyboardType="default"
        />
        <Image
          style={styles.sendIcon}
          contentFit="cover"
          source={require("../assets/send.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
    overflow: "hidden",
  },
  timeTypo: {
    color: Color.grey,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  icon1Border: {
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  comment2FlexBox: {
    marginTop: 11,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon: {
    overflow: "hidden",
  },
  id: {
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    color: Color.black,
    textAlign: "left",
    lineHeight: 24,
  },
  time: {
    lineHeight: 24,
    color: Color.grey,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    marginLeft: 10,
  },
  div1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  comment: {
    color: Color.grey,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    alignSelf: "stretch",
  },
  div: {
    marginLeft: 10,
    flex: 1,
  },
  comment1: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon1: {
    backgroundColor: Color.dimgray_200,
    borderColor: "#ccc",
    justifyContent: "center",
    overflow: "hidden",
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
  },
  inputBox: {
    borderColor: "#e4e4e4",
    height: 40,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.basicWhite,
  },
  sendIcon: {
    width: 24,
    height: 24,
    marginLeft: 11,
    overflow: "hidden",
  },
  inputArea: {
    paddingRight: Padding.p_3xs,
  },
  commentPopup: {
    borderRadius: Border.br_7xs,
    width: 360,
    padding: Padding.p_7xs,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.basicWhite,
  },
});

export default CommentPopup;
