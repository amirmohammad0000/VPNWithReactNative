//////////////////////////////////////////////////////////////////////// Start Section Import
import { StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Style
const styles = StyleSheet.create({
  // Start Style App
  app: {
    width: "100%",
    height: "100%",
  },
  // End Style App

  // Start Style Server
  box_server: {
    width: "100%",
    height: 45,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 28,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
  },

  box_server_icon: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },

  icon_heart: {
    fontSize: 20,
    color: "#aaa",
    marginLeft: 28,
  },

  text_server: {
    fontSize: 16,
    color: "#aaa",
  },

  icon_signal_server: {
    fontSize: 20,
    color: "#aaa",
  },
  // End Style Server
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
