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
    backgroundColor: "#202020",
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
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  box_header_text_content: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  text_header_content: {
    fontSize: 15,
    color: "#fff",
  },

  box_input: {
    width: "90%",
    height: "22%",
  },

  text_input: {
    color: "#fff",
    fontSize: 18,
    padding: 4,
  },

  box_text_pass: {
    width: "90%",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 10,
  },

  text_input_pass: {
    color: "#fff",
    fontSize: 12,
  },

  box_text_email: {
    width: "90%",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  text_input_email: {
    color: "#fff",
    fontSize: 12,
  },
  // End Style Content

  // Start Style Footer
  footer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  button_footer: {
    width: "80%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    borderRadius: 1000,
    marginBottom: 10,
  },

  text_button_footer: {
    color: "#202020",
    fontSize: 18,
  },
  // Start Style Footer
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
