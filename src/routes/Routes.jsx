import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Notification from "../screens/Notification";
import About from "../screens/About";
import { Text, Button } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({ navigation }) => {
  console.log(navigation);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ route }) => ({
          title: route.name,
          headerRight: () => <Entypo onPress={() => navigation.openDrawer()} name='menu' size={24} color='black' style={{ paddingRight: 10 }} />,
        })}
      />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='Un' component={() => <Text>sdasdas</Text>} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='Notification' component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
