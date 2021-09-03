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
    padding: 10,
  },

  box_main_select: {
    width: "100%",
    height: "12%",
    borderBottomWidth: 1,
    borderBottomColor: "#404040",
  },

  text_start: {
    color: "#aaa",
    fontSize: 14,
  },

  box_text_select: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text_front_select: {
    color: "#fff",
    fontSize: 20,
  },

  box_select_icon: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },

  icon_select_arrows: {
    color: "#aaa",
    fontSize: 20,
  },

  box_inputs: {
    width: "100%",
    height: "80%",
    paddingTop: 10,
  },

  box_input: {
    width: "100%",
    height: "30%",
  },

  box_text_input: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },

  text_start_top_input: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  text_end_top_input: {
    color: "#aaa",
    fontSize: 15,
  },

  text_start_bottom_input: {
    color: "#aaa",
    fontSize: 12,
    paddingTop: 10,
    paddingBottom: 200,
  },

  box_field: {
    width: "100%",
    height: "100%",
  },

  box_text_field: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  text_start_top_text_field: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  text_end_top_text_field: {
    color: "#aaa",
    fontSize: 15,
  },

  box_button: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "90%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    borderRadius: 1000,
    marginBottom: 10,
  },

  text_button: {
    color: "#202020",
    fontSize: 18,
  },
  // End Style Content
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
