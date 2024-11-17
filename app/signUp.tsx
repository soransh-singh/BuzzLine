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
import { Octicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import Loading from "./../component/Loading";
import LottieView from "lottie-react-native";
import CustomKeyboardView from "./../component/CustomKeyboardView";
import { useAuth } from "./../context/authContext";
export default function SignUp() {
  const router = useRouter();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !username || !profile) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }
    setLoading(true);

    let response = await register(email, password, username, profile);

    setLoading(false);
    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    }

    console.log("got result: ", response);

    // register process
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
            source={require("../assets/images/signup-image.json")}
            autoPlay
            loop
          />
        </View>
        <View>
          <Text
            style={{ fontSize: hp(4), fontWeight: 700, textAlign: "center" }}
          >
            Sign Up
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
          <Feather name="user" size={hp(2.7)} color={"#777"} />
          <TextInput
            onChangeText={setUsername}
            style={{
              flex: 1,
              fontSize: hp(2),
              fontWeight: "bold",
              color: "700",
              padding: 0,
              paddingLeft: 5,
            }}
            placeholder="Username"
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
          <Feather name="image" size={hp(2.7)} color={"#777"} />
          <TextInput
            onChangeText={setProfile}
            style={{
              flex: 1,
              fontSize: hp(2),
              fontWeight: "bold",
              color: "700",
              padding: 0,
              paddingLeft: 5,
            }}
            placeholder="Profile url"
            placeholderTextColor={"#777"}
          />
        </View>

        <View>
          {loading ? (
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <Loading size={hp(10)} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleRegister}
              style={{
                backgroundColor: "#444495",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 5,
                marginTop: 20,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: hp(2.7), color: "white" }}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[Common.row, { justifyContent: "center" }]}>
          <Text style={{ fontSize: hp(1.8) }}>Already have an account ? </Text>
          <Pressable onPress={() => router.push("/signIn")}>
            <Text style={{ fontSize: hp(1.8) }}>sign in</Text>
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
