//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssStaticIP";
import { NativeBaseProvider, Link, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class StaticIP extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Text style={styles.text_content}>No Static Ip's</Text>
          </Box>
          {/* End Section Content */}

          {/* Start Section Footer */}
          <Box name="Footer" style={styles.footer}>
            <Link href="https://github.com/">
              <Text style={styles.text_footer}>Add Static Ip</Text>
            </Link>

            <MaterialIcons
              name="keyboard-arrow-right"
              style={styles.icon_arrow}
            />
          </Box>
          {/* End Section Footer */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
