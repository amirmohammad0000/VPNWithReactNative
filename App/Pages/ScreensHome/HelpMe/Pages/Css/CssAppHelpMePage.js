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
  // End Style Content

  // Start Style Link
  link: {
    width: "100%",
    height: 70,
    borderBottomColor: "#404040",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 10,
  },

  link_in_link: {
    width: "100%",
    height: 50,
    borderBottomColor: "#404040",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 10,
  },

  link_community: {
    width: "100%",
    height: 150,
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 20,
  },

  box_link_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  icon_link: {
    color: "#aaa",
    fontSize: 35,
  },

  icon_start: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },

  text_link: {
    color: "#aaa",
    fontSize: 18,
  },

  text_link_main: {
    color: "#aaa",
    fontSize: 16,
  },

  box_text_icon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  box_text: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  text_link_bottom: {
    color: "#aaa",
    fontSize: 14,
  },
  // End Style Link
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
