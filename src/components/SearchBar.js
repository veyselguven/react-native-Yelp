import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={35} color="black" />
      <TextInput placeholder="Search" style={styles.inputStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    // backgroundColor: "#F0EEEE",
    backgroundColor: "gray",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 25,
    flexDirection: "row",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});

export default SearchBar;
