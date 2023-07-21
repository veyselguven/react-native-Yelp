import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ResultsDetails = ({ result }) => {
  //   console.log(result);
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default ResultsDetails;