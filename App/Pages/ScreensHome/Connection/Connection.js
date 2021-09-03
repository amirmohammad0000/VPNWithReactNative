//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppConnectionPage from "./Pages/AppConnectionPage";
import AlwaysOnVPN from "./Pages/AlwaysOnVPN";
import NetworkOptions from "./Pages/NetworkOptions";
import SplitTuuneling from "./Pages/SplitTuuneling";
//////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ConnectionPages extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AppConnectionPage"
          component={AppConnectionPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AlwaysOnVPN"
          component={AlwaysOnVPN}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NetworkOptions"
          component={NetworkOptions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplitTuuneling"
          component={SplitTuuneling}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
