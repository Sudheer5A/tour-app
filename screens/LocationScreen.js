import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const LocationScreen = ({ navigation, route }) => {
  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerShown: false,
      }),
    []
  );

  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text
          style={{ fontFamily: "Poppins_700Bold", fontSize: 30, color: "blue" }}
        >
          {item.name}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>About</Text>
        <Text style={styles.infoAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid
          blanditiis ipsam nesciunt voluptas minima sapiente cupiditate qui
          assumenda? Consequatur, qui dolor? Molestiae nostrum omnis quis, eaque
          et architecto excepturi!
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.moreBtn}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: "red",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            Know more
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 15,
              color: "white",
            }}
          >
            Book now
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
          fontFamily: "Poppins_400Regular",
        }}
      >
        Powered by Google
      </Text>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 60,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  imageContainer: {
    height: "45%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: "85%",
    width: "90%",
    borderRadius: 20,
  },

  infoContainer: {
    marginTop: 10,
    height: 150,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },

  infoTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
  },

  infoAbout: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "rgba(0,0,0,0.6)",
  },

  actionContainer: {
    marginTop: 50,
    height: 100,
    width: "100%",
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  moreBtn: {
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bookBtn: {
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
  },
});
