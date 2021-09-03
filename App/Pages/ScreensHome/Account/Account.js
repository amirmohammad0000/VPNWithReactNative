//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAccount";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Link, Box, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class Account extends React.Component {
  // Start Section State
  state = {
    UsernameUser: "AmirMohammad",
    EmailUser: "Add Email",
    PlanUser: "Upgrade",
    Data: "2021-09-24",
  };
  // End Section State

  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncGoToPageAddEmail() {
    this.props.navigation.navigate("AddEmail");
  }

  FuncUpgradePlan() {}
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

            <Text style={styles.text_header}>Account</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Text style={styles.text_info}>INFO</Text>

            <Link style={styles.link}>
              <Text style={styles.text_link}>{this.state.UsernameUser}</Text>

              <Text style={styles.text_link}>Username</Text>
            </Link>

            <Link style={styles.link}>
              <TouchableOpacity
                onPress={() => {
                  this.FuncGoToPageAddEmail();
                }}
              >
                <Text style={styles.text_email}>{this.state.EmailUser}</Text>
              </TouchableOpacity>

              <Text style={styles.text_link}>Email</Text>
            </Link>

            <Text style={styles.text_plan}>PLAN</Text>

            <Link style={styles.link}>
              <TouchableOpacity
                onPress={() => {
                  this.FuncUpgradePlan();
                }}
              >
                <Text style={styles.text_plane}>{this.state.PlanUser}</Text>
              </TouchableOpacity>

              <Text style={styles.text_link}>2 GB/Month</Text>
            </Link>

            <Link style={styles.link}>
              <Text style={styles.text_link}>{this.state.Data}</Text>

              <Text style={styles.text_link}>Reset Data</Text>
            </Link>

            <Link style={styles.link} href="https://google.com">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Text style={styles.text_edit_account}>Edit Account</Text>
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
