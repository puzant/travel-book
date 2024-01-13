import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Login</Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <Pressable style={styles.socialLoginBtn}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>FaceBook</Text>
        </Pressable>
        <Pressable style={styles.socialLoginBtn}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Instagram</Text>
        </Pressable>
      </View>

      <Text style={{ textAlign: "center", fontSize: 16, marginTop: 30 }}>
        Or Login with email
      </Text>

      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          textContentType="password"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 16,
  },
  socialLoginBtn: {
    backgroundColor: "#EC6142",
    padding: 15,
    borderRadius: 14,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    width: "100%",
  },
});
