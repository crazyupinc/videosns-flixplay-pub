const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import UploadLive from "./screens/UploadLive";
import UploadTakePhoto from "./screens/UploadTakePhoto";
import UploadShootVideo from "./screens/UploadShootVideo";
import EditProfileSelfIntro from "./screens/EditProfileSelfIntro";
import EditProfileName from "./screens/EditProfileName";
import EditProfileName1 from "./screens/EditProfileName1";
import EditProfile from "./screens/EditProfile";
import UploadEditingPhoto from "./screens/UploadEditingPhoto";
import UploadDetail from "./screens/UploadDetail";
import FindPassword from "./screens/FindPassword";
import Register from "./screens/Register";
import Splash from "./screens/Splash";
import MyPage from "./screens/MyPage";
import LiveDetail from "./screens/LiveDetail";
import Upload from "./screens/Upload";
import Live2 from "./screens/Live2";
import Main from "./screens/Main";
import MenberPage from "./screens/MenberPage";
import Home1 from "./components/Home1";
import Home from "./components/Home";
import Live1 from "./components/Live1";
import Live from "./components/Live";
import UploadIcon from "./components/Upload";
import MyProfile from "./components/MyProfile";
import MyProfile1 from "./components/MyProfile1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <Home />,
    <Live />,
    <UploadIcon />,
    <MyProfile1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Home1 />,
    <Live1 />,
    <UploadIcon />,
    <MyProfile />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.15)",
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 10,
              elevation: 10,
              shadowOpacity: 1,
              height: 49,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Live"
        component={Live2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadLive"
              component={UploadLive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadTakePhoto"
              component={UploadTakePhoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadShootVideo"
              component={UploadShootVideo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfileSelfIntro"
              component={EditProfileSelfIntro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfileName"
              component={EditProfileName}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfileName1"
              component={EditProfileName1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadEditingPhoto"
              component={UploadEditingPhoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UploadDetail"
              component={UploadDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FindPassword"
              component={FindPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LiveDetail"
              component={LiveDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenberPage"
              component={MenberPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
