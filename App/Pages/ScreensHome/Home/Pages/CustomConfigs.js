;//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssCustomConfigs";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class CustomConfigs extends React.Component {
  FuncAddProfile() {}

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          <Box name="Content" style={styles.content}>
            <Text style={styles.text_content}>No Custom Configs</Text>
          </Box>

          <Box name="Footer" style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                this.FuncAddProfile();
              }}
            >
              <Text style={styles.text_footer}>Add a Profile</Text>
            </TouchableOpacity>

            <MaterialIcons
              name="keyboard-arrow-right"
              style={styles.icon_arrow}
            />
          </Box>
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
