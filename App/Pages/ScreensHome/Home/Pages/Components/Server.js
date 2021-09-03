//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssServer";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Image, Box, Text } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class Server extends React.Component {
  // Start Section State
  state = {
    NameIconServer: "plus",
    ColorIconServer: "#aaa",
    BorderColorServer: "#404040",
    BorderWidthServer: 1,
    NameIconFavouriteInner: "hearto",
    NameIconSignalInner: "signal-cellular-1",
    DisplayBoxServerInner: "none",
  };
  // End Section State

  // Start Section Functions
  FuncSetServer() {
    if (this.state.NameIconServer === "plus") {
      this.setState({
        NameIconServer: "close",
        ColorIconServer: "#fff",
        BorderColorServer: "#fff",
        BorderWidthServer: 2,
        DisplayBoxServerInner: "flex",
      });
    } else {
      this.setState({
        NameIconServer: "plus",
        ColorIconServer: "#aaa",
        BorderColorServer: "#404040",
        BorderWidthServer: 1,
        DisplayBoxServerInner: "none",
      });
    }
  }

  FuncSetFavourite() {
    if (this.state.NameIconFavouriteInner === "hearto") {
      this.setState({
        NameIconFavouriteInner: "heart",
      });
    } else {
      this.setState({
        NameIconFavouriteInner: "hearto",
      });
    }
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Server */}
          <Box
            borderBottomColor={this.state.BorderColorServer}
            borderBottomWidth={this.state.BorderWidthServer}
          >
            <TouchableOpacity
              style={styles.box_server}
              onPress={() => {
                this.FuncSetServer();
              }}
            >
              <Box name="Box_Image_Server" style={styles.box_image_server}>
                <Image
                  style={styles.image_server}
                  source={this.props.Flag}
                  alt="Flag"
                />

                <Text style={styles.text_server}>{this.props.Country}</Text>
              </Box>

              <AntDesign
                name={this.state.NameIconServer}
                style={styles.icon_server}
                color={this.state.ColorIconServer}
              />
            </TouchableOpacity>
          </Box>
          {/* End Section Server */}

          {/* Start Section Server Inner */}
          <Box
            name="Box_Servers_Inner"
            style={styles.box_servers_inner}
            display={this.state.DisplayBoxServerInner}
          >
            <Box
              name="Box_Servers_Inner_Icon"
              style={styles.box_servers_inner_icon}
            >
              <AntDesign
                name={this.state.NameIconFavouriteInner}
                style={styles.icon_heart_inner}
                onPress={() => {
                  this.FuncSetFavourite();
                }}
              />

              <Text style={styles.text_servers_inner}>Chicago</Text>
            </Box>

            <MaterialCommunityIcons
              name={this.state.NameIconSignalInner}
              style={styles.icon_signal_servers}
            />
          </Box>
          {/* End Section Server Inner */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
