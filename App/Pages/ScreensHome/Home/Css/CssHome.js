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

  // Start Style Header
  header: {
    width: "100%",
    height: "40%",
    backgroundColor: "#000000aa",
  },

  header_section_top_app: {
    width: "80%",
    height: "18%",
    backgroundColor: "#202020",
    marginLeft: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 1000,
  },

  text_header: {
    fontSize: 20,
    color: "#fff",
  },

  icon_menu_header: {
    fontSize: 25,
    color: "#fff",
    marginRight: 20,
    marginLeft: 20,
  },
  // End Style Header

  // Start Style Content
  content: {
    width: "100%",
    height: "67%",
  },

  box_buttom_tabs: {
    position: "absolute",
    top: "-10%",
    width: "100%",
    height: "10%",
    backgroundColor: "#202020",
    flexDirection: "row-reverse",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  box_tabs: {
    width: "80%",
    height: "100%",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: 30,
  },

  boxs_icons: {
    marginLeft: 25,
    borderBottomColor: "#fff",
  },

  box_search: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  icon_search: {
    color: "#aaa",
    fontSize: 20,
  },

  icons_button_tabs: {
    fontSize: 20,
    marginTop: "100%",
  },

  box_pages: {
    width: "100%",
    height: "90%",
  },
  // End Style Content

  // Start Style Menu
  menu: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#202020",
    justifyContent: "space-between",
    padding: 10,
  },

  menu_section_top: {
    width: "100%",
    height: "90%",
  },

  menu_section_bottom: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  menu_item: {
    width: "95%",
    height: "9%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#404040",
    marginRight: 10,
    marginLeft: 10,
  },

  icon_menu_item_prefrencec: {
    color: "#fff",
    fontSize: 30,
  },

  text_menu_item_prefrencec: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  icon_menu_item: {
    color: "#aaa",
    fontSize: 30,
  },

  box_menu_item: {
    flexDirection: "row",
  },

  text_menu_item: {
    color: "#aaa",
    fontSize: 20,
    marginRight: 20,
  },

  button_add_email: {
    width: "90%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f5",
    padding: 10,
    borderRadius: 1000,
  },

  text_add_email: {
    color: "#202020",
    fontSize: 18,
  },
  // End Style Menu
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
