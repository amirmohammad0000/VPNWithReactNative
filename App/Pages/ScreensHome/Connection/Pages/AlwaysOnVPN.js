//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAlwaysOnVPN";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class AlwaysOnVPN extends React.Component {
  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Header */}
          <Box name="Header" style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                this.FuncGoBack();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                style={styles.icon_header}
              />
            </TouchableOpacity>

            <Text style={styles.text_header}>AlwaysOnVPN</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Box />

            <Box name="Box_Content" style={styles.box_text_content}>
              <Text style={styles.text_start_content}>Always On VPN</Text>
              <Text style={styles.text_center_content}>
                "Always On" VPN allows Android to control the VPN connection and
                ensure that no data can leave the device unless the VPN tunnel
                is up.
              </Text>
            </Box>

            <Box name="Box_Buttons" style={styles.box_buttons}>
              <TouchableOpacity style={styles.button_go_to_settings}>
                <Text style={styles.text_go_to_settings}>Go to settings</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button_close}
                onPress={() => {
                  this.FuncGoBack();
                }}
              >
                <Text style={styles.text_close}>Close</Text>
              </TouchableOpacity>
            </Box>
          </Box>
          {/* End Section Content */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
