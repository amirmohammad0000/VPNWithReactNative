//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssSendTicket";
import { TouchableOpacity } from "react-native";
import {
  NativeBaseProvider,
  Input,
  TextArea,
  ScrollView,
  Select,
  Box,
  Text,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class SendTicket extends React.Component {
  // Start Section State
  state = {
    ValueSelectBox: "Account",
  };
  // End Section State

  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncValueSelectBox(value) {
    this.setState({
      ValueSelectBox: value,
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

            <Text style={styles.text_header}>Send Ticket</Text>

            <Box></Box>
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Box name="Box_Text_Select" style={styles.box_main_select}>
              <Text style={styles.text_start}>
                Fill in the fields bellow and one of our support agents will
                personally get back to your very soon
              </Text>

              <Box name="Box_Select" style={styles.box_text_select}>
                <Text style={styles.text_front_select}>Category</Text>

                <Box name="Box_Select_Icon" style={styles.box_select_icon}>
                  <Select
                    minWidth="24%"
                    variant="unstyled"
                    color="#aaa"
                    dropdownIcon=" "
                    selectedValue={this.state.ValueSelectBox}
                    onValueChange={(value) => {
                      this.FuncValueSelectBox(value);
                    }}
                  >
                    <Select.Item label="Account" value="Account">
                      Account
                    </Select.Item>
                    <Select.Item label="Technical" value="Technical">
                      Technical
                    </Select.Item>
                    <Select.Item label="Sales" value="Sales">
                      Sales
                    </Select.Item>
                    <Select.Item label="Feedback" value="Feedback">
                      Feedback
                    </Select.Item>
                  </Select>

                  <Entypo
                    name="select-arrows"
                    style={styles.icon_select_arrows}
                  />
                </Box>
              </Box>
            </Box>

            <ScrollView width="100%" height="100%">
              <Box name="Box_Inputs" style={styles.box_inputs}>
                <Box name="Box_Input" style={styles.box_input}>
                  <Box name="Box_Text_Input" style={styles.box_text_input}>
                    <Text style={styles.text_start_top_input}>Email</Text>
                    <Text style={styles.text_end_top_input}>Required</Text>
                  </Box>

                  <Input color="#fff" />

                  <Text style={styles.text_start_bottom_input}>
                    So we can contact you, we won't use it for anything else
                  </Text>
                </Box>

                <Box name="Box_Input" style={styles.box_input}>
                  <Box name="Box_Text_Input" style={styles.box_text_input}>
                    <Text style={styles.text_start_top_input}>Subject</Text>
                    <Text style={styles.text_end_top_input}>Required</Text>
                  </Box>

                  <Input color="#fff" />
                </Box>

                <Box name="Box_Input" style={styles.box_field}>
                  <Box name="Box_Text_Input" style={styles.box_text_field}>
                    <Text style={styles.text_start_top_text_field}>
                      What's the issue?
                    </Text>

                    <Text style={styles.text_end_top_text_field}>Required</Text>
                  </Box>

                  <TextArea
                    placeholder="Message"
                    width="100%"
                    height="50%"
                    color="#fff"
                  />
                </Box>
              </Box>
            </ScrollView>

            <Box name="Box_Button" style={styles.box_button}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text_button}>Continue</Text>
              </TouchableOpacity>
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
