import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMING SOON</Text>
      <Button title="Press Me" onPress={() => console.log("Button pressed!")} />
    </View>
  );
}