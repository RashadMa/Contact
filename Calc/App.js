import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);


  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="with"
        value={width}
        onChangeText={(value) => setWidth(value)}
        keyboardType="numeric"
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="height"
        value={height}
        onChangeText={(value) => setHeight(value)}
      />
      <View style={{ height: width|0, width: height|0, borderWidth: 1 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 5,
    marginVertical: 5,
  },
});
