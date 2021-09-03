//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssSignUp";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Input, ScrollView, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class SignUp extends React.Component {
  // Start Section Functions
  FuncGoToPageHome() {
    this.props.navigation.replace("ScreensHome");
  }

  FuncGoBack() {
    this.props.navigation.goBack();
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        <Box name="App" style={styles.app}>
          {/* Start Section Header */}
          <Box name="App" style={styles.header}>
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

            <Text style={styles.text_header}>SignUp Free</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <ScrollView width="100%" height="100%">
            <Box name="Content" style={styles.content}>
              <Box
                name="Box_Text_Header_Content"
                style={styles.box_header_text_content}
              >
                <Text style={styles.text_header_content}>
                  Sageguard your account, access your settings from
                </Text>
                <Text style={styles.text_header_content}>
                  any device and get more data.
                </Text>
              </Box>

              <Box name="Box_Input" style={styles.box_input}>
                <Text style={styles.text_input}>Choose Username</Text>
                <Input width="100%" height="55%" color="#fff" />
              </Box>

              <Box name="Box_Input" style={styles.box_input}>
                <Text style={styles.text_input}>Choose Password</Text>
                <Input width="100%" height="55%" color="#fff" />
              </Box>

              <Box name="Box_Text_Pass" style={styles.box_text_pass}>
                <Text style={styles.text_input_pass}>
                  8 or more characters with at least one uppercase and lowercase
                </Text>
              </Box>

              <Box name="Box_Input" style={styles.box_input}>
                <Text style={styles.text_input}>(Optional) Email</Text>
                <Input
                  width="100%"
                  height="55%"
                  color="#fff"
                  placeholder="Get 10GB/ Mo"
                />
              </Box>

              <Box name="Box_Text_Email" style={styles.box_text_email}>
                <Text style={styles.text_input_email}>
                  for password recovery, updates & promo only. No spam
                </Text>
              </Box>
            </Box>
          </ScrollView>
          {/* End Section Content */}

          {/* Start Section Footer */}
          <Box name="Footer" style={styles.footer}>
            <TouchableOpacity
              style={styles.button_footer}
              onPress={() => {
                this.FuncGoToPageHome();
              }}
            >
              <Text style={styles.text_button_footer}>Continue</Text>
            </TouchableOpacity>
          </Box>
          {/* End Section Footer */}
        </Box>
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
