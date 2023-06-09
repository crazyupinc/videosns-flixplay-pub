import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import AddFollowPopup3 from "../components/AddFollowPopup3";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

type LiveDetailType = {
  onClose?: () => void;
};

const LiveDetail = ({ onClose }: LiveDetailType) => {
  const [userPlusIconVisible, setUserPlusIconVisible] = useState(false);

  const openUserPlusIcon = useCallback(() => {
    setUserPlusIconVisible(true);
  }, []);

  const closeUserPlusIcon = useCallback(() => {
    setUserPlusIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.liveDetail, styles.icon3Layout]}>
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Text style={styles.logo}>FlixPlay</Text>
          <Image
            style={[styles.menuIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
        </View>
        <Image
          style={styles.liveVideoIcon}
          contentFit="cover"
          source={require("../assets/livevideo.png")}
        />
        <View style={styles.commentPopup}>
          <View style={styles.comment1}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/icon2.png")}
            />
            <View style={styles.div}>
              <View style={styles.div1}>
                <Text style={[styles.id, styles.idTypo]}>fan</Text>
                <Text style={[styles.time, styles.timeTypo]}>30분</Text>
              </View>
              <Text style={[styles.comment, styles.timeTypo]}>
                She is such a talented performer! Her stage presence is amazing.
              </Text>
            </View>
          </View>
          <View style={styles.comment2FlexBox}>
            <View style={[styles.icon1, styles.iconBorder]} />
            <View style={styles.div}>
              <View style={styles.div1}>
                <Text style={[styles.id, styles.idTypo]}>jenny-love</Text>
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
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/div2.png")}
            />
            <View style={styles.div}>
              <View style={styles.div1}>
                <Text style={[styles.id, styles.idTypo]}>fanfany</Text>
                <Text style={[styles.time, styles.timeTypo]}>25분</Text>
              </View>
              <Text style={[styles.comment, styles.timeTypo]}>
                She is such a talented performer! Her stage presence is amazing.
              </Text>
            </View>
          </View>
          <View style={styles.comment2FlexBox}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/div3.png")}
            />
            <View style={styles.div}>
              <View style={styles.div1}>
                <Text style={[styles.id, styles.idTypo]}>1324</Text>
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
              style={[styles.inputBox, styles.iconBorder]}
              placeholder="댓글을 입력하세요."
              keyboardType="default"
            />
            <Image
              style={[styles.sendIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/send1.png")}
            />
          </View>
        </View>
        <View style={[styles.author, styles.authorPosition]}>
          <View style={[styles.icon2, styles.iconBorder]} />
          <Text style={[styles.id4, styles.idTypo]}>blink</Text>
        </View>
        <Pressable
          style={[styles.userPlus, styles.authorPosition]}
          onPress={openUserPlusIcon}
        >
          <Image
            style={[styles.icon3, styles.icon3Layout]}
            contentFit="cover"
            source={require("../assets/userplus1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={userPlusIconVisible}>
        <View style={styles.userPlusIconOverlay}>
          <Pressable
            style={styles.userPlusIconBg}
            onPress={closeUserPlusIcon}
          />
          <AddFollowPopup3 onClose={closeUserPlusIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon3Layout: {
    width: "100%",
    overflow: "hidden",
  },
  headerSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  homeLayout: {
    height: 49,
    width: 72,
  },
  idTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
  },
  timeTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.basicWhite,
    textAlign: "left",
  },
  iconBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  comment2FlexBox: {
    marginTop: 5,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  authorPosition: {
    top: 61,
    position: "absolute",
  },
  logo: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontFamily: FontFamily.istokWebBold,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  menuIcon: {
    overflow: "hidden",
  },
  header: {
    height: 51,
    paddingVertical: 0,
    justifyContent: "space-between",
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  liveVideoIcon: {
    height: 601,
    zIndex: 1,
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
    overflow: "hidden",
  },
  id: {
    color: Color.silver,
    lineHeight: 24,
    textAlign: "left",
  },
  time: {
    color: Color.basicWhite,
    lineHeight: 24,
    marginLeft: 10,
  },
  div1: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  comment: {
    color: Color.basicWhite,
    alignSelf: "stretch",
  },
  div: {
    marginLeft: 10,
    flex: 1,
  },
  comment1: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  icon1: {
    backgroundColor: Color.dimgray_200,
    borderColor: "#fff",
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
    overflow: "hidden",
    justifyContent: "center",
  },
  inputBox: {
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderColor: "#e4e4e4",
    height: 40,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    flex: 1,
  },
  sendIcon: {
    marginLeft: 11,
    overflow: "hidden",
  },
  inputArea: {
    paddingRight: Padding.p_3xs,
  },
  commentPopup: {
    top: 348,
    left: 0,
    borderRadius: Border.br_7xs,
    width: 360,
    height: 304,
    padding: Padding.p_7xs,
    maxHeight: "100%",
    zIndex: 3,
    position: "absolute",
    maxWidth: "100%",
  },
  icon2: {
    backgroundColor: Color.paleturquoise,
    borderColor: "#ccc",
    borderRadius: Border.br_71xl,
    borderStyle: "solid",
    justifyContent: "center",
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  id4: {
    textAlign: "center",
    marginLeft: 6,
    color: Color.basicWhite,
  },
  author: {
    left: 13,
    zIndex: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  userPlusIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userPlusIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon3: {
    height: "100%",
    overflow: "hidden",
  },
  userPlus: {
    right: 16,
    zIndex: 5,
    height: 24,
    width: 24,
  },
  liveDetail: {
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.basicWhite,
  },
});

export default LiveDetail;
