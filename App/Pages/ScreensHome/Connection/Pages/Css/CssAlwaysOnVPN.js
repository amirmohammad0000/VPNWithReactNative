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
    alignItems: "center",
    justifyContent: "space-between",
  },

  box_text_content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },

  text_start_content: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text_center_content: {
    color: "#aaa",
    fontSize: 17,
  },

  box_buttons: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },

  button_go_to_settings: {
    width: "80%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    padding: 10,
    borderRadius: 1000,
    marginBottom: 25,
  },

  text_go_to_settings: {
    color: "#202020",
    fontSize: 18,
  },

  button_close: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
  },

  text_close: {
    color: "#aaa",
    fontSize: 18,
  },
  // End Style Content
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
