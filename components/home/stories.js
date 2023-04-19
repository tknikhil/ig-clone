import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Users from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <image source={{ uri: story.image }} style={styles.story} />
        ))}
      </ScrollView>
      <Text style={{ color: "white" }}>stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
  },
});

export default Stories;
