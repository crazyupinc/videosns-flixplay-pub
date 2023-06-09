import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const UploadDetail = () => {
  return (
    <View style={styles.uploadDetail}>
      <View style={[styles.statusBarLight, styles.headerLayout]}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={[styles.time, styles.timeClr]}>9:41</Text>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <Image
          style={[styles.arrowLeftIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/arrowleft.png")}
        />
        <View style={[styles.upload, styles.iconSpaceBlock]}>
          <Text style={[styles.upload1, styles.timeClr]}>업로드</Text>
        </View>
        <Image
          style={[styles.menuIcon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
        <Image
          style={[styles.arrowRightIcon, styles.iconSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/arrowright.png")}
        />
      </View>
      <View style={styles.content}>
        <View style={[styles.inputSection, styles.homeFlexBox]}>
          <View style={styles.div}>
            <Text
              style={styles.div1}
              numberOfLines={1}
            >{`2000자 이내로 문구를 입력하세요. `}</Text>
          </View>
          <Image
            style={styles.videoThumbnailIcon}
            resizeMode="cover"
            source={require("../assets/videothumbnail.png")}
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.tagPeople} numberOfLines>
            사람 태그하기
          </Text>
          <Text style={[styles.location, styles.shareTypo]} numberOfLines>
            위치 추가
          </Text>
          <Text style={[styles.share, styles.shareTypo]} numberOfLines>
            공유하기
          </Text>
        </View>
      </View>
      <View style={[styles.buttons, styles.homeFlexBox]}>
        <View style={[styles.temporaryStorageButton, styles.buttonLayout]}>
          <Text style={[styles.temporaryStorage, styles.upload2Typo]}>
            임시저장
          </Text>
        </View>
        <View style={[styles.uploadButton, styles.buttonLayout]}>
          <Text style={[styles.upload2, styles.upload2Typo]}>게시하기</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    width: 360,
    backgroundColor: Color.basicWhite,
  },
  timeClr: {
    color: Color.lightLabelPrimary,
    textAlign: "left",
  },
  headerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  iconSpaceBlock: {
    marginLeft: 112,
    overflow: "hidden",
  },
  homeFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  shareTypo: {
    fontFamily: FontFamily.appleSDGothicNeoMedium,
    height: 40,
    left: 0,
    display: "flex",
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    width: 328,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    lineHeight: 20,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  buttonLayout: {
    height: 32,
    width: 160,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  upload2Typo: {
    fontSize: 11,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
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
    lineHeight: 20,
    color: Color.lightLabelPrimary,
    position: "absolute",
  },
  statusBarLight: {
    height: 44,
  },
  arrowLeftIcon: {
    overflow: "hidden",
  },
  upload1: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansKRBold,
    textAlign: "left",
  },
  upload: {
    alignSelf: "stretch",
    width: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
  arrowRightIcon: {
    display: "none",
    height: 24,
    width: 24,
  },
  header: {
    height: 51,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    width: 360,
    backgroundColor: Color.basicWhite,
    overflow: "hidden",
  },
  div1: {
    top: 10,
    left: 16,
    width: 212,
    height: 34,
    display: "flex",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  div: {
    height: 115,
    flex: 1,
  },
  videoThumbnailIcon: {
    width: 79,
    height: 115,
  },
  inputSection: {
    width: 328,
  },
  tagPeople: {
    top: 0,
    height: 40,
    left: 0,
    display: "flex",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    width: 328,
    textAlign: "left",
    color: Color.lightLabelPrimary,
    lineHeight: 20,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  location: {
    top: 43,
  },
  share: {
    top: 86,
  },
  setting: {
    height: 120,
    width: 328,
  },
  content: {
    paddingBottom: 230,
  },
  temporaryStorage: {
    color: Color.gray_100,
    textAlign: "left",
  },
  temporaryStorageButton: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  upload2: {
    color: Color.basicWhite,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: Color.lightLabelPrimary,
    padding: Padding.p_3xs,
    marginLeft: 8,
  },
  buttons: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    width: 328,
    alignItems: "center",
  },
  uploadDetail: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.basicWhite,
  },
});

export default UploadDetail;
