import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={style.header}>
      <Text style={style.heading}>Todo App</Text>
      <Button title='Home' onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#5682e8",
    padding: 8,
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});

export default Header;
