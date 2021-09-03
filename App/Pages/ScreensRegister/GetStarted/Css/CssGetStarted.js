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

  // Start Style Content
  content: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content_page: {
    alignItems: "center",
    justifyContent: "center",
  },

  image_center_page: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 1000,
  },

  text_center_page: {
    color: "#ddd",
    fontSize: 35,
  },

  box_buttons: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },

  button_get_started: {
    width: "80%",
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    padding: 10,
    borderRadius: 1000,
    marginBottom: 25,
  },

  text_get_started: {
    color: "#202020",
    fontSize: 18,
  },

  button_login: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
  },

  text_login: {
    color: "#202020",
    fontSize: 18,
  },
  // End Style Content

  // Start Style Image All Page
  image_page: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  // End Style Image All Page
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
