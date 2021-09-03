//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssSplitTuuneling";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Switch, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class SplitTuuneling extends React.Component {
  // Start Section State
  state = {
    CheckSplitTuuneling: false,
  };
  // End Section State

  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncSwitchSplitTuuneling() {
    if (this.state.CheckSplitTuuneling === false) {
      this.setState({
        CheckSplitTuuneling: true,
      });
    } else {
      this.setState({
        CheckSplitTuuneling: false,
      });
    }
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

            <Text style={styles.text_header}>Split Tuuneling</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Text style={styles.text_header_content}>
              Choose Which apps to exculude or include from VPN when Connected
            </Text>

            <Box style={styles.box_switch}>
              <Text style={styles.text_split_tuuneling}>Split Tuuneling</Text>

              <Switch
                isChecked={this.state.CheckSplitTuuneling}
                onChange={() => {
                  this.FuncSwitchSplitTuuneling();
                }}
              />
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
