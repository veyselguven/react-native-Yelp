import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" color="black" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    // backgroundColor: "#F0EEEE",
    marginTop: 15,
    backgroundColor: "gray",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 25,
    flexDirection: "row",
  },
  inputStyle: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 45,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
