import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ResultsDetails from "./ResultsDetails";
const ResultList = ({ title, results }) => {
  console.log(results);
  return (
    <View style={styles.container}>
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
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
