import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const Notification = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This Notification Page</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 20,
  },
});
