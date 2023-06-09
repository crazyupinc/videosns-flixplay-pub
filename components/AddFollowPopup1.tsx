import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

type AddFollowPopup1Type = {
  onClose?: () => void;
};

const AddFollowPopup1 = ({ onClose }: AddFollowPopup1Type) => {
  return (
    <View style={styles.addFollowPopup1}>
      <View style={styles.addFollowIdWrapper}>
        <Text style={styles.addFollowId}>
          <Text style={styles.jennylove}>jennylove</Text>
          <Text style={styles.text}> 님 팔로우 추가</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jennylove: {
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
  },
  text: {
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
  },
  addFollowId: {
    fontSize: FontSize.size_sm,
    color: Color.whiteGrey,
    textAlign: "center",
  },
  addFollowIdWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addFollowPopup1: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.textBlack,
    overflow: "hidden",
    padding: Padding.p_3xs,
    alignItems: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default AddFollowPopup1;
