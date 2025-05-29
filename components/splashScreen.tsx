import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Dimensions, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animationWrapper, { opacity: fadeAnimation }]}>
        <LottieView
          source={require("../assets/Animation - 1748533802762.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text style={styles.title}> Welcome tO Abdullah Protfulio</Text>
      </Animated.View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827", // dark background
    justifyContent: "center",
    alignItems: "center",
  },
  animationWrapper: {
    width: width * 0.8,
    height: height * 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "System", // customize if needed
  },
});
