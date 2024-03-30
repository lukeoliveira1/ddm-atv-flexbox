// Container.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../theme/styles";

interface ContainerProps {
  width: number;
  height: number;
  margin: number;
}

const Container = ({ width, height, margin }: ContainerProps) => {
  return (
    <View
      style={[
        styles.container,
        { width: width, height: height, margin: margin },
      ]}
    />
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.container,
  },
});
