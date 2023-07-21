import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ResultsDetails from "./ResultsDetails";
const ResultList = ({ title, results }) => {
  console.log(results);
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetails result={item} />;
        }}
      />

      {/* <Text>Result:{results.length}</Text> */}
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
