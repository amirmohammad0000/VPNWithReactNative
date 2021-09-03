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
    backgroundColor: "#000000aa",
  },

  box_on_off: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    padding: 20,
  },

  box_state_on_off: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  box_text_state_on_off: {
    width: 40,
    height: 25,
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1000,
    marginLeft: 10,
  },

  text_state_on_off: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  text_number_right_on_off: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
  },

  box_line: {
    width: 1,
    height: 10,
    backgroundColor: "#aaa",
    marginTop: 5,
    marginLeft: 10,
  },

  text_status_number: {
    color: "#fff",
    fontSize: 14,
  },

  button_on_off: {
    width: 90,
    height: 90,
    marginTop: -40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 1000,
  },

  icon_power: {
    color: "#202020",
    fontSize: 70,
  },

  box_server: {
    width: "100%",
    height: "40%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingRight: 20,
  },

  text_name_country: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },

  text_name_server: {
    color: "#fff",
    fontSize: 30,
  },

  box_connection: {
    width: "100%",
    height: "40%",
    flexDirection: "row-reverse",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 20,
  },

  box_wifi: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },

  icon_wifi_connection: {
    color: "#aaa",
    fontSize: 25,
    marginLeft: 10,
  },

  text_wifi: {
    fontSize: 16,
    color: "#aaa",
  },

  box_ip: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },

  text_ip: {
    fontSize: 16,
    color: "#aaa",
  },

  icon_unlock_connection: {
    color: "#aaa",
    fontSize: 25,
    marginLeft: 10,
  },

  image_app: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  // End Style Content
});
//////////////////////////////////////////////////////////////////////// End Section Style

export { styles };
