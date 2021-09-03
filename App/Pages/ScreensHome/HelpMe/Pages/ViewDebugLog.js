//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssViewDebugLog";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ViewDebugLog extends React.Component {
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

            <Text style={styles.text_header}>View Debug Log</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}></Box>
          {/* End Section Content */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
