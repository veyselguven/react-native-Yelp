import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import Description from "../components/Description";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  console.log("result", result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{ uri: item }}
              horizontal={true}
            />
          );
        }}
        ListFooterComponent={<Description name={result.name} />}
      />
      <Text style={styles.phone}>Phone number : {result.phone}</Text>
      <Text>
        {/* <View>
          <Description name={result.name} />
        </View> */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginVertical: 15,
    flexDirection: "row",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  phone: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default ResultsShowScreen;
