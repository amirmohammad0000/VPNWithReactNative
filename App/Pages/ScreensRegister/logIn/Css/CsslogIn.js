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
    marginTop: 50,
  },

  box_input: {
    width: "90%",
  },

  box_2fa_code: {
    width: "90%",
    height: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#df4",
  },

  text_input: {
    color: "#fff",
    fontSize: 18,
    padding: 4,
  },

  text_input_2fa: {
    color: "#aaa",
    fontSize: 12,
    padding: 4,
  },

  box_link: {
    width: "95%",
    height: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    margin: 10,
    padding: 15,
  },

  text_2fa_code: {
    color: "#aaa",
    fontSize: 18,
  },

  link_forget_pass: {
    width: "100%",
    height: "100%",
  },

  text_link_forget_pass: {
    color: "#aaa",
    fontSize: 18,
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
