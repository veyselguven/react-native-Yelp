import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ResultList = ({ title, results }) => {
  console.log("results", results);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Result:{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
