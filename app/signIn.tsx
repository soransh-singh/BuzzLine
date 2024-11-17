import { Common } from "./../assets/css/common";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import Loading from "./../component/Loading";
import LottieView from "lottie-react-native";
import CustomKeyboardView from "./../component/CustomKeyboardView";
import { useAuth } from "../context/authContext";

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Sign In", "Please fill all the fields!");
      return;
    }
    setLoading(true);
    const response = await login(email, password);
    setLoading(false);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }

    console.log("got result: ", response);
  };
  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View style={{ padding: 20 }}>
        <View
          style={{
            height: 300,
          }}
        >
          <LottieView
            style={{ flex: 1 }}
            source={require("../assets/images/login-image.json")}
          />
        </View>
        <View>
          <Text
            style={{ fontSize: hp(4), fontWeight: 700, textAlign: "center" }}
          >
            Sign In
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#CCC",
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Octicons name="mail" size={hp(2.7)} color={"#777"} />
          <TextInput
            onChangeText={setEmail}
            style={{
              flex: 1,
              fontSize: hp(2),
              fontWeight: "bold",
              color: "700",
              padding: 0,
              paddingLeft: 5,
            }}
            placeholder="Email address"
            placeholderTextColor={"#777"}
          />
        </View>
        <View
          style={{
            backgroundColor: "#CCC",
            marginTop: 20,
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderRadius: 10,
            flexDirection: "row",
          }}
        >
          <Octicons name="lock" size={hp(2.7)} color={"#777"} />
          <TextInput
            onChangeText={setPassword}
            style={{
              flex: 1,
              fontSize: hp(2),
              fontWeight: "bold",
              color: "700",
              padding: 0,
              paddingLeft: 5,
            }}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor={"#777"}
          />
        </View>
        <Text style={{ fontWeight: "600", textAlign: "right", color: "#777" }}>
          Forgot Password?
        </Text>
        <View>
          {loading ? (
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <Loading size={hp(10)} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                backgroundColor: "#444495",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 5,
                marginTop: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: hp(2.7), color: "white" }}>Sign In</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[Common.row, { justifyContent: "center" }]}>
          <Text style={{ fontSize: hp(1.8) }}>Don't have an account ? </Text>
          <Pressable onPress={() => router.push("/signUp")}>
            <Text style={{ fontSize: hp(1.8) }}>sign up</Text>
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
