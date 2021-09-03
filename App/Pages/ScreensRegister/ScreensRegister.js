//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "./GetStarted/GetStarted";
import logIn from "./logIn/logIn";
import SignUp from "./SignUp/SignUp";
//////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ScreensRegister extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="logIn"
          component={logIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
