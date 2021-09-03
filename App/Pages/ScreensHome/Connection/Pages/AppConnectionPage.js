//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAppConnectionPage";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Switch, Link, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class AppConnectionPage extends React.Component {
  // Start Section State
  state = {
    CheckAllowLanTraffic: false,
    CheckAutoConnectOnBoot: false,
    CheckGpsSpoofing: false,
  };
  // End Section State

  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncGoToPageNetworkOptions() {
    this.props.navigation.navigate("NetworkOptions");
  }

  FuncGoToPageSplitTuuneling() {
    this.props.navigation.navigate("SplitTuuneling");
  }

  FuncGoToPageAlwaysOnVPN() {
    this.props.navigation.navigate("AlwaysOnVPN");
  }

  FuncSwitchAllowLanTraffic() {
    if (this.state.CheckAllowLanTraffic === false) {
      this.setState({
        CheckAllowLanTraffic: true,
      });
    } else {
      this.setState({
        CheckAllowLanTraffic: false,
      });
    }
  }

  FuncSwitchAutoConnectOnBoot() {
    if (this.state.CheckAutoConnectOnBoot === false) {
      this.setState({
        CheckAutoConnectOnBoot: true,
      });
    } else {
      this.setState({
        CheckAutoConnectOnBoot: false,
      });
    }
  }

  FuncSwitchGpsSpoofing() {
    if (this.state.CheckGpsSpoofing === false) {
      this.setState({
        CheckGpsSpoofing: true,
      });
    } else {
      this.setState({
        CheckGpsSpoofing: false,
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

            <Text style={styles.text_header}>Connection</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Link
              style={styles.link}
              onPress={() => {
                this.FuncGoToPageNetworkOptions();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />
              <Text style={styles.text_link}>Network Options</Text>
            </Link>

            <Link
              style={styles.link}
              onPress={() => {
                this.FuncGoToPageSplitTuuneling();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />
              <Text style={styles.text_link}>Split Tuuneling</Text>
            </Link>

            <Link
              style={styles.link}
              onPress={() => {
                this.FuncGoToPageAlwaysOnVPN();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />
              <Text style={styles.text_link}>Always On VPN</Text>
            </Link>

            <Link style={styles.link}>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />
              <Text style={styles.text_link}>Connection Mode</Text>
            </Link>

            <Link style={styles.link}>
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />
              <Text style={styles.text_link}>Packet Size</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckAllowLanTraffic}
                onChange={() => {
                  this.FuncSwitchAllowLanTraffic();
                }}
              />

              <Text style={styles.text_link}>Allow LAN traffic</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckAutoConnectOnBoot}
                onChange={() => {
                  this.FuncSwitchAutoConnectOnBoot();
                }}
              />

              <Text style={styles.text_link}>Auto-connect on boot</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckGpsSpoofing}
                onChange={() => {
                  this.FuncSwitchGpsSpoofing();
                }}
              />

              <Text style={styles.text_link}>GPS spoofing</Text>
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
