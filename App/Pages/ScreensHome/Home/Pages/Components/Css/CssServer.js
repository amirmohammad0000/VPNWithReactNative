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
    height: 50,
    paddingHorizontal: 25,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  box_image_server: {
    flexDirection: "row-reverse",
  },

  image_server: {
    width: 30,
    height: 20,
  },

  text_server: {
    color: "#aaa",
    fontSize: 16,
    marginRight: 20,
  },

  icon_server: {
    fontSize: 22,
  },

  box_servers_inner: {
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 28,
  },

  box_servers_inner_icon: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },

  icon_heart_inner: {
    fontSize: 20,
    color: "#aaa",
    marginLeft: 28,
  },

  text_servers_inner: {
    fontSize: 16,
    color: "#aaa",
  },

  icon_signal_servers: {
    fontSize: 20,
    color: "#aaa",
  },
  // End Style Server
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
