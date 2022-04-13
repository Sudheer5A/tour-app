import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Location from "../components/Location";
import { placeData } from "../places.json";
import Place from "../components/Place";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => navigation.setOptions({ headerShown: false }));

  const locationData = [
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Rome",
      image:
        "https://images.unsplash.com/photo-1626260113600-84c917a39f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  const renderItem1 = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Location", { item })}>
      <Location name={item.name} image={item.image} />
    </TouchableOpacity>
  );

  const renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Location", { item })}>
      <Place name={item.name} image={item.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="menu" size={35} color="black" />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.dp}
        />
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.introText}>Where do you want to go?</Text>
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="black" />
          <TextInput style={styles.input} />
        </View>
      </View>

      <View style={styles.locContainer}>
        <View style={styles.locHeader}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              opacity: 0.8,
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            Recommended
          </Text>
          <Feather name="more-horizontal" size={24} color="rgba(0,0,0,0.5)" />
        </View>
        <View>
          <FlatList
            data={locationData.concat(placeData)}
            renderItem={renderItem1}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.placesContainer}>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            opacity: 0.8,
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          Trending this month
        </Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={placeData}
            renderItem={renderItem2}
            keyExtractor={(item) => item.name}
            horizontal
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },

  header: {
    position: "absolute",
    top: 60,
    height: 40,
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  dp: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  searchContainer: {
    height: 200,
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 90,
  },

  introText: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  input: {
    width: "80%",
    marginLeft: 10,
  },

  locContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: 310,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  locHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  placesContainer: {
    height: 120,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "space-between",
  },
});
