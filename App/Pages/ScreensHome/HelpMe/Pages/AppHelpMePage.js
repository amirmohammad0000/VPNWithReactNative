//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssAppHelpMePage";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Link, Box, Text } from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class AppHelpMePage extends React.Component {
  // Start Section Functions
  FuncGoBack() {
    this.props.navigation.goBack();
  }

  FuncGoToPageSendTicket() {
    this.props.navigation.navigate("SendTicket");
  }

  FuncGoToPageViewDebugLog() {
    this.props.navigation.navigate("ViewDebugLog");
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

            <Text style={styles.text_header}>Help Me!</Text>

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

              <Box name="Box_Text_Icon" style={styles.box_text_icon}>
                <Box name="Box_Text" style={styles.box_text}>
                  <Text style={styles.text_link}>Knowledge Base</Text>
                  <Text style={styles.text_link_bottom}>
                    All you need to know about VPN.
                  </Text>
                </Box>

                <AntDesign name="apple-o" style={styles.icon_start} />
              </Box>
            </Link>

            <Link style={styles.link} href="https://github.com/">
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Box name="Box_Text_Icon" style={styles.box_text_icon}>
                <Box name="Box_Text" style={styles.box_text}>
                  <Text style={styles.text_link}>Talk to Garry</Text>
                  <Text style={styles.text_link_bottom}>
                    Not Siri smart but can still answer questions.
                  </Text>
                </Box>

                <AntDesign name="heart" style={styles.icon_start} />
              </Box>
            </Link>

            <Link
              style={styles.link}
              onPress={() => {
                this.FuncGoToPageSendTicket();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Box name="Box_Text_Icon" style={styles.box_text_icon}>
                <Box name="Box_Text" style={styles.box_text}>
                  <Text style={styles.text_link}>Send Ticket</Text>
                  <Text style={styles.text_link_bottom}>
                    Stuck? Send us a ticket.
                  </Text>
                </Box>

                <Entypo name="ticket" style={styles.icon_start} />
              </Box>
            </Link>

            <Link style={styles.link_community}>
              <Box name="Box_Link_Main" style={styles.box_link_main}>
                <Box />

                <Box name="Box_Text" style={styles.box_text}>
                  <Text style={styles.text_link}>Community Support</Text>
                  <Text style={styles.text_link_bottom}>
                    Best placec to help and get help from other users.
                  </Text>
                </Box>

                <Entypo name="heart" style={styles.icon_start} />
              </Box>

              <Link style={styles.link_in_link} href="https://github.com">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_link}
                />

                <Text style={styles.text_link_main}>Reddit</Text>
              </Link>

              <Link style={styles.link_in_link} href="https://github.com">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_link}
                />

                <Text style={styles.text_link_main}>Discord</Text>
              </Link>
            </Link>

            <Link
              style={styles.link}
              onPress={() => {
                this.FuncGoToPageViewDebugLog();
              }}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                style={styles.icon_link}
              />

              <Box name="Box_Text_Icon" style={styles.box_text_icon}>
                <Text style={styles.text_link}>View Debug Log</Text>

                <MaterialCommunityIcons
                  name="card-search-outline"
                  style={styles.icon_start}
                />
              </Box>
            </Link>

            <Link style={styles.link}>
              <Box />

              <Box name="Box_Text_Icon" style={styles.box_text_icon}>
                <Text style={styles.text_link}>Send Debug Log</Text>

                <MaterialIcons name="send" style={styles.icon_start} />
              </Box>
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
