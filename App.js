import React from "react";
import Routes from "./src/routes/Routes";

import { View, StyleSheet } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
