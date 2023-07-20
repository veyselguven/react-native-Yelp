import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  // console.log("results", results);
  const filterResultByPrice = (price) => {
    //price=== "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
      <ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
      <ResultList results={filterResultByPrice("$$$")} title="Cost Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
