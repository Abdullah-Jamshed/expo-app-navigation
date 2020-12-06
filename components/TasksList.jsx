import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const TasksList = ({ todos, deleteItem }) => {
  const deleteTask = (index) => {
    deleteItem(index);
  };

  return (
    <View>
      <ScrollView style={style.scroll}>
        <FlatList
          data={todos}
          renderItem={(data, index) => {
            return (
              <View key={index} style={style.item}>
                <Text style={style.itemContent}>{data.item.value}</Text>
                <AntDesign name='delete' size={18} onPress={() => deleteTask(data.index)} />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    padding: 10,
    borderTopColor: "#f7f7f7",
    borderLeftColor: "#f7f7f7",
    borderRightColor: "#f7f7f7",
    borderBottomColor: "#f7f7f7",
    borderWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: "#5682e8",
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContent: {
    paddingLeft: 10,
    fontSize: 17,
  },
  scroll: {
    width: "100%",
  },
});

export default TasksList;