//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssHome";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Button, Modal, Text, Box } from "native-base";
import CustomConfigs from "./Pages/CustomConfigs";
import Favourites from "./Pages/Favourites";
import BestServer from "./Pages/BestServer";
import Servers from "./Pages/Servers";
import StaticIP from "./Pages/StaticIP";
import AppHomePage from "./Pages/AppHomePage";
import {
  MaterialIcons,
  FontAwesome5,
  Feather,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class ScreensHome extends React.Component {
  // Start Section State
  state = {
    StatePages: <Servers />,
    PositionMenu: "100%",
    ColorIconOne: "#fff",
    ColorIconTwo: "#aaa",
    ColorIconThree: "#aaa",
    ColorIconFour: "#aaa",
    ColorIconFive: "#aaa",
    BorderWidthIconOne: 2,
    BorderWidthIconTwo: 0,
    BorderWidthIconThree: 0,
    BorderWidthIconFour: 0,
    BorderWidthIconFive: 0,
    SteteModalLogOut: false,
  };
  // End Section State

  // Start Section Functions
  FuncSetPageIconOne() {
    this.setState({
      StatePages: <Servers />,
      ColorIconOne: "#fff",
      ColorIconTwo: "#aaa",
      ColorIconThree: "#aaa",
      ColorIconFour: "#aaa",
      ColorIconFive: "#aaa",
      BorderWidthIconOne: 2,
      BorderWidthIconTwo: 0,
      BorderWidthIconThree: 0,
      BorderWidthIconFour: 0,
      BorderWidthIconFive: 0,
    });
  }

  FuncSetPageIconTwo() {
    this.setState({
      StatePages: <Favourites />,
      ColorIconOne: "#aaa",
      ColorIconTwo: "#fff",
      ColorIconThree: "#aaa",
      ColorIconFour: "#aaa",
      ColorIconFive: "#aaa",
      BorderWidthIconOne: 0,
      BorderWidthIconTwo: 2,
      BorderWidthIconThree: 0,
      BorderWidthIconFour: 0,
      BorderWidthIconFive: 0,
    });
  }

  FuncSetPageIconThree() {
    this.setState({
      StatePages: <BestServer />,
      ColorIconOne: "#aaa",
      ColorIconTwo: "#aaa",
      ColorIconThree: "#fff",
      ColorIconFour: "#aaa",
      ColorIconFive: "#aaa",
      BorderWidthIconOne: 0,
      BorderWidthIconTwo: 0,
      BorderWidthIconThree: 2,
      BorderWidthIconFour: 0,
      BorderWidthIconFive: 0,
    });
  }

  FuncSetPageIconFour() {
    this.setState({
      StatePages: <StaticIP />,
      ColorIconOne: "#aaa",
      ColorIconTwo: "#aaa",
      ColorIconThree: "#aaa",
      ColorIconFour: "#fff",
      ColorIconFive: "#aaa",
      BorderWidthIconOne: 0,
      BorderWidthIconTwo: 0,
      BorderWidthIconThree: 0,
      BorderWidthIconFour: 2,
      BorderWidthIconFive: 0,
    });
  }

  FuncSetPageIconFive() {
    this.setState({
      StatePages: <CustomConfigs />,
      ColorIconOne: "#aaa",
      ColorIconTwo: "#aaa",
      ColorIconThree: "#aaa",
      ColorIconFour: "#aaa",
      ColorIconFive: "#fff",
      BorderWidthIconOne: 0,
      BorderWidthIconTwo: 0,
      BorderWidthIconThree: 0,
      BorderWidthIconFour: 0,
      BorderWidthIconFive: 2,
    });
  }

  FuncSearch() {}

  FuncModalLogOut() {
    if (this.state.SteteModalLogOut === false) {
      this.setState({
        SteteModalLogOut: true,
      });
    } else {
      this.setState({
        SteteModalLogOut: false,
      });
    }
  }

  FuncMenu() {
    if (this.state.PositionMenu === "100%") {
      this.setState({
        PositionMenu: "0%",
      });
    } else {
      this.setState({
        PositionMenu: "100%",
      });
    }
  }

  FuncGoToPageGeneral() {
    this.props.navigation.navigate("General");
  }

  FuncGoToPageAccount() {
    this.props.navigation.navigate("Account");
  }

  FuncGoToPageConnection() {
    this.props.navigation.navigate("Connection");
  }

  FuncGoToPageHelpMe() {
    this.props.navigation.navigate("HelpMe");
  }

  FuncGoToPageAbout() {
    this.props.navigation.navigate("About");
  }

  FuncGoToPageAddEmail() {
    this.props.navigation.navigate("AddEmail");
  }

  FuncLogOut() {
    this.props.navigation.replace("ScreensRegister");
  }
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Header */}
          <Box name="Header" style={styles.header}>
            <Box
              name="Header_Section_Top_App"
              style={styles.header_section_top_app}
            >
              <Text style={styles.text_header}>VPN</Text>

              <TouchableOpacity
                onPress={() => {
                  this.FuncMenu();
                }}
              >
                <MaterialIcons name="menu" style={styles.icon_menu_header} />
              </TouchableOpacity>
            </Box>

            <AppHomePage />
          </Box>
          {/* End Section Header */}

          {/* Start Section Content */}
          <Box name="Content" style={styles.content}>
            <Box name="Box_Bottom_Tabs" style={styles.box_buttom_tabs}>
              <Box name="Box_Tabs" style={styles.box_tabs}>
                <Box
                  borderBottomWidth={this.state.BorderWidthIconOne}
                  style={styles.boxs_icons}
                >
                  <Entypo
                    name="500px-with-circle"
                    style={styles.icons_button_tabs}
                    color={this.state.ColorIconOne}
                    onPress={() => {
                      this.FuncSetPageIconOne();
                    }}
                  />
                </Box>

                <Box
                  borderBottomWidth={this.state.BorderWidthIconTwo}
                  style={styles.boxs_icons}
                >
                  <MaterialIcons
                    name="favorite-outline"
                    style={styles.icons_button_tabs}
                    color={this.state.ColorIconTwo}
                    onPress={() => {
                      this.FuncSetPageIconTwo();
                    }}
                  />
                </Box>

                <Box
                  borderBottomWidth={this.state.BorderWidthIconThree}
                  style={styles.boxs_icons}
                >
                  <Feather
                    name="play-circle"
                    style={styles.icons_button_tabs}
                    color={this.state.ColorIconThree}
                    onPress={() => {
                      this.FuncSetPageIconThree();
                    }}
                  />
                </Box>

                <Box
                  borderBottomWidth={this.state.BorderWidthIconFour}
                  style={styles.boxs_icons}
                >
                  <AntDesign
                    name="wifi"
                    style={styles.icons_button_tabs}
                    color={this.state.ColorIconFour}
                    onPress={() => {
                      this.FuncSetPageIconFour();
                    }}
                  />
                </Box>

                <Box
                  borderBottomWidth={this.state.BorderWidthIconFive}
                  style={styles.boxs_icons}
                >
                  <AntDesign
                    name="codesquareo"
                    style={styles.icons_button_tabs}
                    color={this.state.ColorIconFive}
                    onPress={() => {
                      this.FuncSetPageIconFive();
                    }}
                  />
                </Box>
              </Box>

              <Box name="Box_Search" style={styles.box_search}>
                <AntDesign
                  name="search1"
                  style={styles.icon_search}
                  onPress={() => {
                    this.FuncSearch();
                  }}
                />
              </Box>
            </Box>

            <Box name="Box_Pages" style={styles.box_pages}>
              {this.state.StatePages}
            </Box>
          </Box>
          {/* End Section Content */}

          {/* Start Section Menu */}
          <Box name="Menu" style={styles.menu} left={this.state.PositionMenu}>
            <Box name="Menu_Section_Top" style={styles.menu_section_top}>
              <Box style={styles.menu_item}>
                <TouchableOpacity
                  onPress={() => {
                    this.FuncMenu();
                  }}
                >
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    style={styles.icon_menu_item_prefrencec}
                  />
                </TouchableOpacity>

                <Text style={styles.text_menu_item_prefrencec}>
                  Preferences
                </Text>

                <Box />
              </Box>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncGoToPageGeneral();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>General</Text>
                  <FontAwesome5 name="square" style={styles.icon_menu_item} />
                </Box>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_menu_item}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncGoToPageAccount();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>Account</Text>
                  <MaterialIcons
                    name="account-circle"
                    style={styles.icon_menu_item}
                  />
                </Box>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_menu_item}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncGoToPageConnection();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>Connection</Text>
                  <MaterialIcons name="wifi" style={styles.icon_menu_item} />
                </Box>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_menu_item}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncGoToPageHelpMe();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>Help Me!</Text>
                  <MaterialIcons
                    name="help-outline"
                    style={styles.icon_menu_item}
                  />
                </Box>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_menu_item}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncGoToPageAbout();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>About</Text>
                  <AntDesign name="info" style={styles.icon_menu_item} />
                </Box>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  style={styles.icon_menu_item}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menu_item}
                onPress={() => {
                  this.FuncModalLogOut();
                }}
              >
                <Box style={styles.box_menu_item}>
                  <Text style={styles.text_menu_item}>Log Out</Text>
                  <MaterialIcons name="logout" style={styles.icon_menu_item} />
                </Box>
              </TouchableOpacity>
            </Box>

            <Box name="Menu_Section_Bottom" style={styles.menu_section_bottom}>
              <TouchableOpacity
                style={styles.button_add_email}
                onPress={() => {
                  this.FuncGoToPageAddEmail();
                }}
              >
                <Text style={styles.text_add_email}>Add Email</Text>
              </TouchableOpacity>
            </Box>
          </Box>
          {/* End Section Menu */}

          {/* Start Section Modal */}
          <Modal isOpen={this.state.SteteModalLogOut}>
            <Modal.Content maxWidth="400px">
              <Modal.Header>Log Out</Modal.Header>
              <Modal.Body>Are you sure you want to log out of VPN?</Modal.Body>
              <Modal.Footer>
                <Button.Group variant="ghost" space={2}>
                  <Button
                    onPress={() => {
                      this.FuncModalLogOut();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      this.FuncModalLogOut();
                      this.FuncLogOut();
                    }}
                  >
                    Log Out
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          {/* End Section Modal */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
