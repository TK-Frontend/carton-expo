import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { SafeAreaView } from "react-native";
import Screens from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Screens />
      </SafeAreaView>
    </Provider>
  );
}
