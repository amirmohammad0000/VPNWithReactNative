//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAbout";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Link, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class About extends React.Component {
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

            <Text style={styles.text_header}>About</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>Status</Text>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>About Us</Text>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>Privacy Policy</Text>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>Terms</Text>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>Blog</Text>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_link}>Jobs</Text>
            </Link>
          </Box>
          {/* End Section Content */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
