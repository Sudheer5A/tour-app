import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const IntroScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img1} style={styles.image} />
        <Image source={img2} style={styles.image2} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.introText}>Travel with ease</Text>
        <Text style={styles.infoText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi soluta
          magnam, ut expedita dolore odio quam.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    height: 150,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  image: {
    height: 200,
    width: 100,
    borderRadius: 50,
  },

  image2: {
    height: 200,
    width: 100,
    borderRadius: 50,
    marginTop: 50,
  },

  textContainer: {
    height: "15%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  introText: {
    fontSize: 30,
    fontFamily: "Poppins_700Bold",
  },

  infoText: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },

  button: {
    height: 45,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22A49A",
    borderRadius: 10,
    marginBottom: 50,
  },
  btnText: {
    color: "white",
    fontFamily: "Poppins_700Bold",
  },
});
