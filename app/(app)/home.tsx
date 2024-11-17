import { useAuth } from "../../context/authContext";
import { Button, Pressable, Text, View } from "react-native";

export default function Home() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    console.log("handleLogout");

    await logout();
  };
  return (
    <View>
      <Text>Home Page</Text>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
