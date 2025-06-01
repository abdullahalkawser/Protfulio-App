import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Dimensions, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animationWrapper,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        <LottieView
          source={require("../assets/Animation - 1748533802762.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Abdullah's Portfolio</Text>
      </Animated.View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A", // dark slate
    justifyContent: "center",
    alignItems: "center",
  },
  animationWrapper: {
    width: width * 0.85,
    height: height * 0.6,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  lottie: {
    width: "100%",
    height: "70%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38BDF8", // Sky blue accent
    marginTop: 15,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 25,
    color: "#E5E7EB", // gray-200
    marginTop: 5,
    fontFamily: "System",
  },
});
