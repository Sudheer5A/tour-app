import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Place = ({ navigation, route, name, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 70,
    display: "flex",
    alignItems: "center",
    marginHorizontal: 13,
    flexDirection: "row",
    backgroundColor: "rgba(29,237,252,0.07)",
    borderRadius: 30,
  },

  title: {
    marginLeft: 10,
    fontFamily: "Poppins_600SemiBold",
    color: "rgba(0,0,0,0.7)",
  },
  image: {
    height: "100%",
    width: 80,
    borderRadius: 30,
  },
});
