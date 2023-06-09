import * as React from "react";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Live2 = () => {
  return (
    <ScrollView
      style={[styles.live, styles.liveLayout]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.liveScrollViewContent}
    >
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerSpaceBlock]}>
        <Text style={styles.logo}>FlixPlay</Text>
        <Image
          style={styles.menuIcon}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
      </View>
      <View style={[styles.content, styles.headerSpaceBlock]}>
        <View style={[styles.liveContent, styles.liveContentShadowBox1]}>
          <Image
            style={styles.liveScreenIcon}
            resizeMode="cover"
            source={require("../assets/livescreen.png")}
          />
          <View style={styles.info}>
            <View style={styles.author}>
              <View style={[styles.icon, styles.iconLayout]} />
              <Text style={[styles.id, styles.idTypo]}>blink</Text>
            </View>
            <Text style={[styles.info1, styles.info1Typo]} numberOfLines>
              블랙핑크 콘서트 왔어요~~~~
            </Text>
          </View>
          <View style={styles.liveLabel}>
            <Text style={[styles.live1, styles.info1Typo]}>라이브 방송</Text>
          </View>
        </View>
        <View style={styles.liveContentShadowBox}>
          <Image
            style={[styles.liveScreenIcon1, styles.liveIconLayout]}
            resizeMode="cover"
            source={require("../assets/livescreen1.png")}
          />
          <View style={styles.info}>
            <View style={styles.author}>
              <View style={[styles.icon1, styles.iconLayout]} />
              <Text style={[styles.id, styles.idTypo]}>heajiny</Text>
            </View>
            <Text style={[styles.info1, styles.info1Typo]} numberOfLines>
              일상의 순간. 커피한잔 하면서 함께 이야기 나눠요.
            </Text>
          </View>
          <View style={styles.liveLabel}>
            <Text style={[styles.live1, styles.info1Typo]}>라이브 방송</Text>
          </View>
        </View>
        <View style={styles.liveContentShadowBox}>
          <Image
            style={[styles.liveScreenIcon2, styles.liveIconLayout]}
            resizeMode="cover"
            source={require("../assets/livescreen2.png")}
          />
          <View style={styles.info}>
            <View style={styles.author}>
              <View style={[styles.icon2, styles.iconLayout]} />
              <Text style={[styles.id, styles.idTypo]}>jy</Text>
            </View>
            <Text style={[styles.info1, styles.info1Typo]} numberOfLines>
              혹시나 궁금해 하실것같아서 라이브 방송켭니다.
            </Text>
          </View>
          <View style={styles.liveLabel}>
            <Text style={[styles.live1, styles.info1Typo]}>라이브 방송</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  liveScrollViewContent: {
    flexDirection: "column",
  },
  liveLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  timeClr: {
    color: Color.lightLabelPrimary,
    lineHeight: 20,
  },
  headerSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  liveContentShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    backgroundColor: Color.basicWhite,
  },
  iconLayout: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    height: 24,
    width: 24,
    alignItems: "center",
    overflow: "hidden",
  },
  idTypo: {
    fontFamily: FontFamily.notoSansKRBold,
    fontWeight: "700",
    color: Color.lightLabelPrimary,
  },
  info1Typo: {
    fontFamily: FontFamily.appleSDGothicNeoMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  liveIconLayout: {
    height: 200,
    zIndex: 0,
  },
  homeLayout: {
    height: 49,
    width: 72,
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
    fontWeight: "600",
    fontFamily: FontFamily.robotoSemibold,
    textAlign: "left",
    position: "absolute",
  },
  statusBarLight: {
    width: 360,
    height: 44,
    backgroundColor: Color.basicWhite,
  },
  logo: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontFamily: FontFamily.istokWebBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.lightLabelPrimary,
  },
  menuIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  header: {
    height: 51,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  liveScreenIcon: {
    height: 220,
    zIndex: 0,
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    backgroundColor: Color.paleturquoise,
    justifyContent: "center",
  },
  id: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginLeft: 6,
  },
  author: {
    alignItems: "center",
    flexDirection: "row",
  },
  info1: {
    fontSize: FontSize.size_sm,
    display: "flex",
    height: 34,
    marginTop: 3,
    alignItems: "center",
    alignSelf: "stretch",
    overflow: "hidden",
    color: Color.lightLabelPrimary,
    lineHeight: 20,
  },
  info: {
    paddingVertical: Padding.p_smi,
    zIndex: 1,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  live1: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    color: Color.basicWhite,
  },
  liveLabel: {
    top: 11,
    right: 17,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.crimson,
    width: 56,
    height: 20,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  liveContent: {
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(10, 22, 70, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  liveScreenIcon1: {
    alignSelf: "stretch",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  icon1: {
    backgroundColor: "#beabe9",
    justifyContent: "center",
  },
  liveContentShadowBox: {
    marginTop: 10,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(10, 22, 70, 0.1)",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
  liveScreenIcon2: {
    width: 328,
  },
  icon2: {
    backgroundColor: "#420eaf",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
  },
  live: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Color.basicWhite,
  },
});

export default Live2;
