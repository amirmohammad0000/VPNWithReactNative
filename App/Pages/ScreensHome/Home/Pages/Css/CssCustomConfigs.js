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

  // Start Style Content
  content: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  text_content: {
    color: "#aaa",
    fontSize: 20,
  },

  footer: {
    width: "100%",
    height: "10%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#303030",
  },

  text_footer: {
    color: "#aaa",
    fontSize: 16,
    marginLeft: 5,
  },

  icon_arrow: {
    color: "#aaa",
    fontSize: 25,
  },
  // Start Style Content
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
