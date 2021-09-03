//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAppHomePage";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Image, Box, Text } from "native-base";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class AppHomePage extends React.Component {
  // Start Section State
  state = {
    SourceImage: require("../../../../Assets/Images/FlagEmrican.png"),
    NameIconPower: "power-cycle",
    StateOnOff: "Off",
    NumberRightOnOff: "IkEv2",
    StatusNumber: "500",
    NameCountry: "Chicago",
    NameServer: "Cub",
    TextWifi: "No Internet!",
    TextIP: "198.22.122.100",
  };
  // End Section State

  // Start Section Functions
  FuncOnOffVPN() {
    if (this.state.StateOnOff === "Off") {
      this.setState({
        NameIconPower: "power",
        StateOnOff: "On",
      });
    } else {
      this.setState({
        NameIconPower: "power-cycle",
        StateOnOff: "Off",
      });
    }
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          <Box name="Content" style={styles.content}>
            <Box name="State_On_Off" style={styles.box_on_off}>
              <Box name="Box_State_On_Off" style={styles.box_state_on_off}>
                <Box
                  name="Box_Text_State_On_Off"
                  style={styles.box_text_state_on_off}
                >
                  <Text style={styles.text_state_on_off}>
                    {this.state.StateOnOff}
                  </Text>
                </Box>

                <Text style={styles.text_number_right_on_off}>
                  {this.state.NumberRightOnOff}
                </Text>

                <Box name="Box_Line" style={styles.box_line} />

                <Text style={styles.text_status_number}>
                  {this.state.StatusNumber}
                </Text>
              </Box>

              <TouchableOpacity
                style={styles.button_on_off}
                onPress={() => {
                  this.FuncOnOffVPN();
                }}
              >
                <MaterialCommunityIcons
                  name={this.state.NameIconPower}
                  style={styles.icon_power}
                />
              </TouchableOpacity>
            </Box>

            <Box name="Box_Server" style={styles.box_server}>
              <Text style={styles.text_name_country}>
                {this.state.NameCountry}
              </Text>
              <Text style={styles.text_name_server}>
                {this.state.NameServer}
              </Text>
            </Box>

            <Box name="Box_Connection" style={styles.box_connection}>
              <Box name="Box_Wifi" style={styles.box_wifi}>
                <Feather name="wifi" style={styles.icon_wifi_connection} />
                <Text style={styles.text_wifi}>{this.state.TextWifi}</Text>
              </Box>

              <Box name="Box_IP" style={styles.box_ip}>
                <Feather name="unlock" style={styles.icon_unlock_connection} />
                <Text style={styles.text_ip}>{this.state.TextIP}</Text>
              </Box>
            </Box>
          </Box>

          <Image
            source={this.state.SourceImage}
            alt="Flag"
            style={styles.image_app}
          />
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
