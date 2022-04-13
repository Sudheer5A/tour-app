import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Location = ({ name, image, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 200,
    overflow: "hidden",
    borderRadius: 30,
    marginHorizontal: 10,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
    position: "absolute",
    zIndex: 3,
    bottom: 20,
    left: 20,
    color: "white",
  },

  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});
