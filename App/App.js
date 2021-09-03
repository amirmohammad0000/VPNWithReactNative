//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreensRegister from "./Pages/ScreensRegister/ScreensRegister";
import ScreensHome from "./Pages/ScreensHome/ScreensHome";
//////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ScreensRegister"
            component={ScreensRegister}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ScreensHome"
            component={ScreensHome}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
