//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssServers";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, Image, Box, FlatList, Text } from "native-base";
import Server from "./Components/Server";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class Servers extends React.Component {
  // Start Section State
  state = {
    data: [
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "US Central",
        Servers: [
          { Serverss: "Dallas Ranch" },
          { Serverss: "Altanta Mountain" },
          { Serverss: "Altanta Peidmont" },
        ],
      },
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "US West",
        Servers: [
          { Serverss: "Dallas Ranch" },
          { Serverss: "Altanta Mountain" },
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Altanta Peidmont" },
        ],
      },
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "Canada West",
        Servers: [
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Dallas Ranch" },
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Altanta Mountain" },
          { Serverss: "Altanta Peidmont" },
        ],
      },
    ],
  };
  // End Section State

  // Start Section Functions
  FuncBestLocation() {}
  // End Section Functions

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Server */}
          <TouchableOpacity
            style={styles.box_server}
            onPress={() => {
              this.FuncBestLocation();
            }}
          >
            <Image
              style={styles.image_server}
              source={require("../../../../Assets/Images/FlagEmrican.png")}
              alt="Flag"
            />

            <Text style={styles.text_server}>Best Location</Text>
          </TouchableOpacity>
          {/* End Section Server */}

          {/* Start Section Servers */}
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Server
                Flag={item.Flag}
                Country={item.Country}
                Servers={item.Servers}
              />
            )}
          />
          {/* Start Section Servers */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
