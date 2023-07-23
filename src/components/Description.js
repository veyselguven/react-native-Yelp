import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const Description = ({ name }) => {
  return (
    <View>
      <Text>
        Welcome to Delightful {name} Restaurant Indulge in a culinary journey
        like no other at Delightful {name} Restaurant, where flavors dance on
        your taste buds and ambiance soothes your soul. We invite you to embark
        on a gastronomic adventure, where every dish is a masterpiece crafted
        with passion and precision.
        <Text style={styles.body}>
          A Celebration of Flavors At Delightful
          {name}, we believe that food should be a celebration of flavors, a
          harmonious symphony of fresh ingredients and culinary expertise. Our
          talented team of chefs draws inspiration from around the world,
          infusing each dish with a unique blend of creativity and authenticity.
          Whether you crave the bold spices of the Mediterranean, the subtle
          elegance of Japanese cuisine, or the comforting familiarity of classic
          favorites, our diverse menu has something to delight every palate. An
          Atmosphere of Warmth Step into our welcoming embrace and experience an
          atmosphere of warmth and hospitality. Our cozy dining spaces are
          designed to create an inviting ambiance, perfect for intimate dinners
          or joyful gatherings with friends and family.
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginVertical: 15,
  },
});
export default Description;
