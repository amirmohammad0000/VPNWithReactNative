import "react-native-gesture-handler";
import { I18nManager } from "react-native";
import { registerRootComponent } from "expo";
I18nManager.allowRTL(true);
import App from "./App/App";
registerRootComponent(App);
