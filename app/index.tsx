import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function StartPage() {
  return (
    <View style={styles.Container}>
      <ActivityIndicator size={"large"} color={"gray"} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
