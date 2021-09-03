//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssServerFavourites";
import { NativeBaseProvider, Box, Text } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ServerFavourites extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Server */}
          <Box name="Box_Server" style={styles.box_server}>
            <Box name="Box_Server_Icon" style={styles.box_server_icon}>
              <AntDesign name="heart" style={styles.icon_heart} />

              <Text style={styles.text_server}>{this.props.Server}</Text>
            </Box>

            <MaterialCommunityIcons
              name="signal-cellular-3"
              style={styles.icon_signal_server}
            />
          </Box>
          {/* End Section Server */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
