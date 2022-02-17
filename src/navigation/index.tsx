import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import {
  ContactScreen,
  ForgotPasswordScreen,
  InitialScreen,
  MainScreen,
  ResultsScreen,
  SettingsScreen,
  SigninScreen,
  SignupScreen,
  StatisticsScreen,
  TipScreen,
  VipScreen,
  WorkProductivityScreen,
  WorkSummaryScreen,
} from "../screens";

export type MainStackParamList = {
  ContactScreen: undefined;
  ForgotPasswordScreen: undefined;
  InitialScreen: undefined;
  MainScreen: undefined;
  ResultsScreen: undefined;
  SettingsScreen: undefined;
  SigninScreen: undefined;
  SignupScreen: undefined;
  StatisticsScreen: undefined;
  TipScreen: undefined;
  VipScreen: undefined;
  WorkProductivityScreen: undefined;
  WorkSummaryScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="SignupScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="ContactScreen" component={ContactScreen} />
        <MainStack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="MainScreen" component={MainScreen} />
        <MainStack.Screen name="ResultsScreen" component={ResultsScreen} />
        <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
        <MainStack.Screen name="SigninScreen" component={SigninScreen} />
        <MainStack.Screen name="SignupScreen" component={SignupScreen} />
        <MainStack.Screen
          name="StatisticsScreen"
          component={StatisticsScreen}
        />
        <MainStack.Screen name="TipScreen" component={TipScreen} />
        <MainStack.Screen name="VipScreen" component={VipScreen} />
        <MainStack.Screen
          name="WorkProductivityScreen"
          component={WorkProductivityScreen}
        />
        <MainStack.Screen
          name="WorkSummaryScreen"
          component={WorkSummaryScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
