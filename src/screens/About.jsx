import React from "react";
import { Text, View, StyleSheet } from "react-native";

const About = ({ navigation }) => {
  console.log("navigation");
  return (
    <View style={styles.container}>
     
      <Text>This is About page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
