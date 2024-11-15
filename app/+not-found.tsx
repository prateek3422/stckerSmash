import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "opps not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to the home
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default NotFoundScreen;
