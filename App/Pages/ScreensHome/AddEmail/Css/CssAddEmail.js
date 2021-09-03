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

  // Start Style Header
  header: {
    width: "100%",
    height: "10%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  icon_header: {
    color: "#fff",
    fontSize: 35,
  },

  text_header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  // End Style Header

  // Start Style Content
  content: {
    width: "100%",
    height: "90%",
  },

  box_input: {
    width: "100%",
    height: "90%",
    padding: 10,
  },

  text_top_input: {
    color: "#fff",
    fontSize: 20,
    paddingBottom: 8,
  },

  text_bottom_input: {
    color: "#aaa",
    fontSize: 12,
    paddingTop: 5,
  },

  box_button: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "90%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    borderRadius: 1000,
    marginBottom: 10,
  },

  text_button: {
    color: "#000",
    fontSize: 18,
  },
  // End Style Content
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
