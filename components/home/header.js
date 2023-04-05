import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/ig_name.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{ url: "https://icons8.com/icon/37787/add-new" }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff" }}>DUMMY</Text>
        <Text style={{ color: "#fff" }}>DUMMY</Text>
        <Text style={{ color: "#fff" }}>DUMMY</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  icons: {
    width: 30,
    height: 30,
  },
});
export default Header;
