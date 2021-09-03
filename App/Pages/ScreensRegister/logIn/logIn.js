//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CsslogIn";
import { TouchableOpacity } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Input,
  ScrollView,
  Link,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class logIn extends React.Component {
  // Start Section State
  state = {
    DisplayBoxInputFA2: "none",
    DisplayTextFA2: "flex",
    WidthBoxInput: "28%",
  };
  // End Section State

  // Start Section Functions
  FuncShowInput2FACode() {
    this.setState({
      DisplayBoxInputFA2: "flex",
      DisplayTextFA2: "none",
      WidthBoxInput: "22%",
    });
  }

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
        {/* Start Section App */}
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
                name="Box_Input"
                style={styles.box_input}
                height={this.state.WidthBoxInput}
              >
                <Text style={styles.text_input}>Username</Text>
                <Input width="100%" height="55%" color="#fff" />
              </Box>

              <Box
                name="Box_Input"
                style={styles.box_input}
                height={this.state.WidthBoxInput}
              >
                <Text style={styles.text_input}>Password</Text>
                <Input width="100%" height="55%" color="#fff" />
              </Box>

              <Box
                name="Box_Input"
                style={styles.box_input}
                height={this.state.WidthBoxInput}
                display={this.state.DisplayBoxInputFA2}
              >
                <Text style={styles.text_input}>2FA Code</Text>
                <Input width="100%" height="55%" color="#fff" />
                <Text style={styles.text_input_2fa}>
                  If enabled, use an authorization app to generate the code.
                </Text>
              </Box>

              <Box name="Box_Link" style={styles.box_link}>
                <Link href="https://google.com" style={styles.link_forget_pass}>
                  <Text style={styles.text_link_forget_pass}>
                    Forget Password?
                  </Text>
                </Link>

                <TouchableOpacity
                  onPress={() => {
                    this.FuncShowInput2FACode();
                  }}
                >
                  <Text
                    style={styles.text_2fa_code}
                    display={this.state.DisplayTextFA2}
                  >
                    2FA Code
                  </Text>
                </TouchableOpacity>
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
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
