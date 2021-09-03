//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home/Home";
import General from "./General/General";
import Account from "./Account/Account";
import Connection from "./Connection/Connection";
import HelpMe from "./HelpMe/HelpMe";
import About from "./About/About";
import AddEmail from "./AddEmail/AddEmail";
//////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ScreensHome extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Connection"
          component={Connection}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HelpMe"
          component={HelpMe}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddEmail"
          component={AddEmail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
