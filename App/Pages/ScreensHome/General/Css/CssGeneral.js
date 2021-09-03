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
    height: 60,
    borderBottomColor: "#404040",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingRight: 20,
    paddingLeft: 10,
  },

  box_select_link: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },

  icon_select_arrows: {
    color: "#aaa",
    fontSize: 20,
  },

  icon_link: {
    color: "#aaa",
    fontSize: 35,
  },

  text_link: {
    color: "#fff",
    fontSize: 18,
  },
  // End Style Link
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
