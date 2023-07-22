import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Cost Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
