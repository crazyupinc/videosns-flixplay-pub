import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Linking,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import AddFollowPopup1 from "../components/AddFollowPopup1";
import CommentPopup from "../components/CommentPopup";
import AddFollowPopup2 from "../components/AddFollowPopup2";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Main = () => {
  const [userPlusIconVisible, setUserPlusIconVisible] = useState(false);
  const [commentIconVisible, setCommentIconVisible] = useState(false);
  const [userPlusIcon1Visible, setUserPlusIcon1Visible] = useState(false);
  const [commentIcon1Visible, setCommentIcon1Visible] = useState(false);

  const openUserPlusIcon = useCallback(() => {
    setUserPlusIconVisible(true);
  }, []);

  const closeUserPlusIcon = useCallback(() => {
    setUserPlusIconVisible(false);
  }, []);

  const openCommentIcon = useCallback(() => {
    setCommentIconVisible(true);
  }, []);

  const closeCommentIcon = useCallback(() => {
    setCommentIconVisible(false);
  }, []);

  const openUserPlusIcon1 = useCallback(() => {
    setUserPlusIcon1Visible(true);
  }, []);

  const closeUserPlusIcon1 = useCallback(() => {
    setUserPlusIcon1Visible(false);
  }, []);

  const openCommentIcon1 = useCallback(() => {
    setCommentIcon1Visible(true);
  }, []);

  const closeCommentIcon1 = useCallback(() => {
    setCommentIcon1Visible(false);
  }, []);

  return (
    <>
      <ScrollView
        style={[styles.main, styles.mainLayout]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollViewContent}
      >
        <View style={[styles.header, styles.headerFlexBox]}>
          <Text style={styles.logo}>FlixPlay</Text>
          <Image
            style={[styles.menuIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
        </View>
        <View style={styles.contents}>
          <View style={styles.contentsBorder}>
            <View style={styles.headerFlexBox}>
              <View style={styles.homeFlexBox}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/icon1.png")}
                />
                <Text style={styles.id}>jennylove</Text>
                <Text style={styles.time}>1시간</Text>
              </View>
              <Pressable
                style={[styles.userPlus, styles.menuIconLayout]}
                onPress={openUserPlusIcon}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/userplus.png")}
                />
              </Pressable>
            </View>
            <Image
              style={[styles.imgIcon, styles.divSpaceBlock]}
              contentFit="cover"
              source={require("../assets/img.png")}
            />
            <View style={[styles.div, styles.divSpaceBlock]}>
              <View style={styles.div1}>
                <Image
                  style={[styles.thumbsUpIcon, styles.commentPosition]}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Pressable
                  style={[styles.comment, styles.commentPosition]}
                  onPress={openCommentIcon}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/comment.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.comment1}>
                <Text style={styles.id1}>jennylove</Text>
                <Text style={styles.textHide}>
                  {`Jennie is performing at the `}
                  <Text style={styles.chanel}>#Chanel</Text>
                  {` afterparty! She first performed a cover of Fly Me To The Moon by Frank Sinatra. Jennie is performing at the `}
                  <Text style={styles.chanel}>#Chanel</Text>
                  {` afterparty! She first performed a cover of Fly Me To The Moon by Frank Sinatra. Jennie is performing at the `}
                  <Text style={styles.chanel}>#Chanel</Text>
                  {` afterparty! She first performed a cover of Fly Me To The Moon by Frank Sinatra. Jennie is performing at the `}
                  <Text style={styles.chanel}>#Chanel</Text> afterparty! She
                  first performed a cover of Fly Me To The Moon by Frank Sinatra
                </Text>
                <Pressable numberOfLines={2} onPress={() => {}}>
                  <Text
                    style={styles.text1Typo}
                  >{`Jennie is performing at the #Chanel afterparty! She first performed a cover of Fly Me To The Moon by Frank `}</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.contents2, styles.contentsBorder]}>
            <View style={styles.headerFlexBox}>
              <View style={styles.homeFlexBox}>
                <View style={[styles.icon3, styles.iconLayout]} />
                <Text style={styles.id}>roselove</Text>
                <Text style={styles.time}>2시간</Text>
              </View>
              <Pressable
                style={[styles.userPlus, styles.menuIconLayout]}
                onPress={openUserPlusIcon1}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/userplus.png")}
                />
              </Pressable>
            </View>
            <Image
              style={[styles.imgIcon, styles.divSpaceBlock]}
              contentFit="cover"
              source={require("../assets/img1.png")}
            />
            <View style={[styles.div, styles.divSpaceBlock]}>
              <View style={styles.div1}>
                <Image
                  style={[styles.thumbsUpIcon, styles.commentPosition]}
                  contentFit="cover"
                  source={require("../assets/thumbsup.png")}
                />
                <Pressable
                  style={[styles.comment, styles.commentPosition]}
                  onPress={openCommentIcon1}
                >
                  <Image
                    style={styles.icon1}
                    contentFit="cover"
                    source={require("../assets/comment.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.comment1}>
                <Text style={styles.id1}>roselove</Text>
                <Text
                  style={styles.text1Typo}
                  numberOfLines={2}
                >{`Introducing the stunning photoshoot pictures of BLACKPINK's Rosé! In these captivating shots, Rosé
  `}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent visible={userPlusIconVisible}>
        <View style={styles.userPlusIconOverlay}>
          <Pressable
            style={styles.userPlusIconBg}
            onPress={closeUserPlusIcon}
          />
          <AddFollowPopup1 onClose={closeUserPlusIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={commentIconVisible}>
        <View style={styles.commentIconOverlay}>
          <Pressable style={styles.commentIconBg} onPress={closeCommentIcon} />
          <CommentPopup onClose={closeCommentIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={userPlusIcon1Visible}>
        <View style={styles.userPlusIcon1Overlay}>
          <Pressable
            style={styles.userPlusIcon1Bg}
            onPress={closeUserPlusIcon1}
          />
          <AddFollowPopup2 onClose={closeUserPlusIcon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={commentIcon1Visible}>
        <View style={styles.commentIcon1Overlay}>
          <Pressable
            style={styles.commentIcon1Bg}
            onPress={closeCommentIcon1}
          />
          <CommentPopup onClose={closeCommentIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mainScrollViewContent: {
    flexDirection: "column",
  },
  mainLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  headerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  menuIconLayout: {
    width: 24,
    height: 24,
  },
  divSpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  commentPosition: {
    top: 0,
    position: "absolute",
    height: 24,
    width: 24,
  },
  contentsBorder: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: Color.basicWhite,
  },
  iconLayout: {
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
    overflow: "hidden",
  },
  homeLayout: {
    height: 49,
    width: 72,
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
    height: 24,
    overflow: "hidden",
  },
  header: {
    height: 51,
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  id: {
    marginLeft: 6,
    textAlign: "center",
    fontFamily: FontFamily.notoSansKRBold,
    fontSize: FontSize.size_base,
    color: Color.black,
    fontWeight: "700",
  },
  time: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.grey,
    marginLeft: 6,
    textAlign: "center",
  },
  homeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  userPlus: {
    height: 24,
  },
  imgIcon: {
    height: 555,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thumbsUpIcon: {
    left: 0,
    overflow: "hidden",
  },
  commentIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  commentIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  comment: {
    left: 37,
  },
  div1: {
    height: 24,
    alignSelf: "stretch",
  },
  id1: {
    fontFamily: FontFamily.notoSansKRBold,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  chanel: {
    textDecoration: "underline",
  },
  textHide: {
    display: "none",
    fontSize: FontSize.size_smi,
    color: Color.grey,
    fontFamily: FontFamily.notoSansKRBold,
    textAlign: "left",
    fontWeight: "700",
    alignSelf: "stretch",
  },
  text1Typo: {
    height: 52,
    display: "flex",
    fontSize: FontSize.size_smi,
    color: Color.grey,
    fontFamily: FontFamily.notoSansKRBold,
    textAlign: "left",
    fontWeight: "700",
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  comment1: {
    marginTop: 11,
    alignSelf: "stretch",
  },
  div: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    marginTop: 2,
  },
  icon3: {
    backgroundColor: "#ffa9a9",
    borderColor: "#ccc",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    height: 41,
    width: 41,
    borderRadius: Border.br_71xl,
    alignItems: "center",
  },
  userPlusIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  userPlusIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  commentIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  commentIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  contents2: {
    marginTop: 10,
  },
  contents: {
    alignSelf: "stretch",
  },
  main: {
    flex: 1,
    backgroundColor: Color.basicWhite,
  },
});

export default Main;
