//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssGeneral";
import { TouchableOpacity } from "react-native";
import {
  NativeBaseProvider,
  Switch,
  Box,
  Link,
  Select,
  Text,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class General extends React.Component {
  // Start Section State
  state = {
    CheckNotificationState: false,
    CheckHapticFeedback: true,
    CheckAppBackground: false,
    ValueLocationOrder: "Geography",
    ValueDisplayLatency: "Bars",
    ValueLanguage: "en",
    ValueApperance: "Dark",
  };
  // End Section State

  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncSwitchNotificationState() {
    if (this.state.CheckNotificationState === false) {
      this.setState({
        CheckNotificationState: true,
      });
    } else {
      this.setState({
        CheckNotificationState: false,
      });
    }
  }

  FuncSwitchHapticFeedback() {
    if (this.state.CheckHapticFeedback === false) {
      this.setState({
        CheckHapticFeedback: true,
      });
    } else {
      this.setState({
        CheckHapticFeedback: false,
      });
    }
  }

  FuncSwitchAppBackground() {
    if (this.state.CheckAppBackground === false) {
      this.setState({
        CheckAppBackground: true,
      });
    } else {
      this.setState({
        CheckAppBackground: false,
      });
    }
  }

  FuncLocationOrder(value) {
    this.setState({
      ValueLocationOrder: value,
    });
  }

  FuncDisplayLatency(value) {
    this.setState({
      ValueDisplayLatency: value,
    });
  }

  FuncLanguage(value) {
    this.setState({
      ValueLanguage: value,
    });
  }

  FuncApperance(value) {
    this.setState({
      ValueApperance: value,
    });
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

            <Text style={styles.text_header}>General</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Link style={styles.link}>
              <Box style={styles.box_select_link}>
                <Select
                  minWidth="35%"
                  variant="unstyled"
                  color="#aaa"
                  dropdownIcon=" "
                  selectedValue={this.state.ValueLocationOrder}
                  onValueChange={(value) => {
                    this.FuncLocationOrder(value);
                  }}
                >
                  <Select.Item label="Geography" value="Geography">
                    Geography
                  </Select.Item>

                  <Select.Item label="Alphabet" value="Alphabet">
                    Alphabet
                  </Select.Item>

                  <Select.Item label="Latency" value="Latency">
                    Latency
                  </Select.Item>
                </Select>

                <Entypo
                  name="select-arrows"
                  style={styles.icon_select_arrows}
                />
              </Box>

              <Text style={styles.text_link}>Location Order</Text>
            </Link>

            <Link style={styles.link}>
              <Box style={styles.box_select_link}>
                <Select
                  minWidth="35%"
                  variant="unstyled"
                  color="#aaa"
                  dropdownIcon=" "
                  selectedValue={this.state.ValueDisplayLatency}
                  onValueChange={(value) => {
                    this.FuncDisplayLatency(value);
                  }}
                >
                  <Select.Item label="Bars" value="Bars">
                    Bars
                  </Select.Item>

                  <Select.Item label="Ms" value="Ms">
                    Ms
                  </Select.Item>
                </Select>

                <Entypo
                  name="select-arrows"
                  style={styles.icon_select_arrows}
                />
              </Box>

              <Text style={styles.text_link}>Display Latency</Text>
            </Link>

            <Link style={styles.link}>
              <Box style={styles.box_select_link}>
                <Select
                  minWidth="35%"
                  variant="unstyled"
                  color="#aaa"
                  dropdownIcon=" "
                  selectedValue={this.state.ValueLanguage}
                  onValueChange={(value) => {
                    this.FuncLanguage(value);
                  }}
                >
                  <Select.Item label="English (en)" value="en">
                    English (en)
                  </Select.Item>

                  <Select.Item label="Espanol (es)" value="es">
                    Espanol (es)
                  </Select.Item>

                  <Select.Item label="Francais (fr)" value="fr">
                    Francais (fr)
                  </Select.Item>

                  <Select.Item label="Indonesian (in)" value="in">
                    Indonesian (in)
                  </Select.Item>

                  <Select.Item label="Turkish (tr)" value="tr">
                    Turkish (tr)
                  </Select.Item>

                  <Select.Item label="Dutch (nl)" value="nl">
                    Dutch (nl)
                  </Select.Item>
                </Select>

                <Entypo
                  name="select-arrows"
                  style={styles.icon_select_arrows}
                />
              </Box>

              <Text style={styles.text_link}>Language</Text>
            </Link>

            <Link style={styles.link}>
              <Box style={styles.box_select_link}>
                <Select
                  minWidth="35%"
                  variant="unstyled"
                  color="#aaa"
                  dropdownIcon=" "
                  selectedValue={this.state.ValueApperance}
                  onValueChange={(value) => {
                    this.FuncApperance(value);
                  }}
                >
                  <Select.Item label="Dark" value="Dark">
                    Dark
                  </Select.Item>

                  <Select.Item label="Light" value="Light">
                    Light
                  </Select.Item>
                </Select>

                <Entypo
                  name="select-arrows"
                  style={styles.icon_select_arrows}
                />
              </Box>

              <Text style={styles.text_link}>Apperance</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckNotificationState}
                onChange={() => {
                  this.FuncSwitchNotificationState();
                }}
              />

              <Text style={styles.text_link}>Notification State</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckHapticFeedback}
                onChange={() => {
                  this.FuncSwitchHapticFeedback();
                }}
              />

              <Text style={styles.text_link}>Haptic Feedback</Text>
            </Link>

            <Link style={styles.link}>
              <Switch
                isChecked={this.state.CheckAppBackground}
                onChange={() => {
                  this.FuncSwitchAppBackground();
                }}
              />

              <Text style={styles.text_link}>App Background</Text>
            </Link>

            <Link style={styles.link}>
              <Text style={styles.text_link}>1.0.0</Text>

              <Text style={styles.text_link}>Version</Text>
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
