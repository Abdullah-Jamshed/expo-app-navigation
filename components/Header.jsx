import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={style.header}>
      <Text style={style.heading}>Todo App</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#5682e8",
    padding: 8,
    paddingTop: 30,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});

export default Header;
