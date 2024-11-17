import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading({ size }) {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../assets/images/Animation - 1728643195019.json")}
        autoPlay
        loop
      />
    </View>
  );
}
