//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssGetStarted";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Box, Image, Text } from "native-base";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class GetStarted extends React.Component {
  // Start Section Functions
  FuncGoToPageSignUp() {
    this.props.navigation.navigate("SignUp");
  }

  FuncGoToPageLogIn() {
    this.props.navigation.navigate("logIn");
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          <Box name="Content" style={styles.content}>
            <Box name="Box_Header_Page" />

            <Box name="Box_Content_Page" style={styles.content_page}>
              <Image
                style={styles.image_center_page}
                source={require("../../../Assets/Images/PageGetStarted.gif")}
                alt="Gif"
              />
              <Text style={styles.text_center_page}>Keep Your</Text>
              <Text style={styles.text_center_page}>Secrets.</Text>
            </Box>

            <Box name="Box_Buttons" style={styles.box_buttons}>
              <TouchableOpacity
                style={styles.button_get_started}
                onPress={() => {
                  this.FuncGoToPageSignUp();
                }}
              >
                <Text style={styles.text_get_started}>Get Started</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button_login}
                onPress={() => {
                  this.FuncGoToPageLogIn();
                }}
              >
                <Text style={styles.text_login}>Login</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        {/* End Section App */}

        <Image
          style={styles.image_page}
          source={require("../../../Assets/Images/BackgroundPageGetStarted.png")}
          alt="Background"
        />
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
