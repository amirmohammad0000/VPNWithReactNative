//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppHelpMePage from "./Pages/AppHelpMePage";
import SendTicket from "./Pages/SendTicket";
import ViewDebugLog from "./Pages/ViewDebugLog";
//////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ConnectionPages extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AppHelpMePage"
          component={AppHelpMePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SendTicket"
          component={SendTicket}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewDebugLog"
          component={ViewDebugLog}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
