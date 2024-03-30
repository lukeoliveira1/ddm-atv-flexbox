import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { theme } from "./src/components/theme/styles";
import Container from "./src/components/container";

export default function App() {
  const containerData = Array(15).fill({ width: 40, height: 40, margin: 6 });

  return (
    <View style={styles.general}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.content}>
        <SafeAreaView style={styles.first_view}>
          <Container width={50} height={160} margin={10} />
          <Container width={50} height={160} margin={10} />
          <Container width={50} height={160} margin={10} />
        </SafeAreaView>

        <SafeAreaView style={styles.second_view}>
          <Container width={220} height={40} margin={10} />
          <Container width={220} height={40} margin={10} />
          <Container width={220} height={40} margin={10} />
        </SafeAreaView>

        <SafeAreaView style={styles.third_view}>
          {containerData.map((container, index) => (
            <Container key={index} {...container} />
          ))}
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: theme.colors.background.first,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.background.second,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  first_view: {
    flex: 1,
    backgroundColor: theme.colors.background.third,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 35,
    gap: 10,
    minWidth: 255,
  },
  second_view: {
    flex: 1,
    backgroundColor: theme.colors.background.third,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 25,
    minWidth: 255,
  },
  third_view: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: theme.colors.background.third,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 15,
    maxWidth: 260,
  },
});
