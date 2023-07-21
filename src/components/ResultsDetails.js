import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ResultsDetails = ({ result }) => {
  //   console.log(result);
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({});
export default ResultsDetails;
