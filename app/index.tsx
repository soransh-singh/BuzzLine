import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ff000033",
    paddingTop: 20,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
