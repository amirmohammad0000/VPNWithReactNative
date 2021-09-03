//////////////////////////////////////////////////////////////////////// Start Section Import
import { StyleSheet } from "react-native";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Style
const styles = StyleSheet.create({
  // Start Style App
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: "#202020",
  },
  // End Style App

  // Start Style Server
  box_server: {
    width: "100%",
    height: 50,
    flexDirection: "row-reverse",
    paddingHorizontal: 25,
    borderBottomColor: "#404040",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  // End Style Server
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
