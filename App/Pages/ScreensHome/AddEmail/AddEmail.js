//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAddEmail";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Input, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class AddEmail extends React.Component {
  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncAddEmail() {}
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

            <Text style={styles.text_header}>AddEmail</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Box name="Box_Input" style={styles.box_input}>
              <Text style={styles.text_top_input}>Email</Text>

              <Input color="#fff" />

              <Text style={styles.text_bottom_input}>
                For password recovery, updates & promo only. No spam
              </Text>
            </Box>

            <Box name="Box_Button" style={styles.box_button}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.FuncAddEmail();
                }}
              >
                <Text style={styles.text_button}>Continue</Text>
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
