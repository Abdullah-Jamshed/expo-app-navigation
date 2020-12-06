import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";

const TasksList = ({ todos, deleteItem }) => {
  const deleteTask = (index) => {
    deleteItem(index);
  };

  return (
    <View>
      <ScrollView style={style.scroll}>
        <FlatList
          data={todos}
          renderItem={(data) => {
            return (
              <View key={data.index} style={style.item}>
                <Text style={style.itemContent}>{data.item.value}</Text>
                <TouchableOpacity style={style.itemBtn}>
                  <Text onPress={() => deleteTask(data.index)} style={style.itemBtnContent}>
                    Delete
                  </Text>
                </TouchableOpacity>
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
    padding: 5,
    borderTopColor: "#f7f7f7",
    borderLeftColor: "#f7f7f7",
    borderRightColor: "#f7f7f7",
    borderBottomColor: "#f7f7f7",
    borderWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: "#5682e8",
    marginBottom: 10,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContent: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 17,
  },
  itemBtnContent: {
    padding: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: "white",
    // fontWeight:"700",
  },
  itemBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    // height: 25,
    backgroundColor: "#5682e8",
    borderRadius: 5,
  },
  scroll: {
    width: "100%",
  },
});

export default TasksList;
