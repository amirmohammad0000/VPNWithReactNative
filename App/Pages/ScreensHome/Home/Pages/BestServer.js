//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssBestServer";
import { NativeBaseProvider, Image, Box, FlatList, Text } from "native-base";
import Server from "./Components/Server";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class BestServer extends React.Component {
  // Start Section State
  state = {
    data: [
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "WINDFLIX US",
        Servers: [
          { Serverss: "Dallas Ranch" },
          { Serverss: "Altanta Mountain" },
          { Serverss: "Altanta Peidmont" },
        ],
      },
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "WINDFLIX CA",
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
        Country: "WINDFLIX UK",
        Servers: [
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Dallas Ranch" },
          { Serverss: "Altanta Peidmont" },
          { Serverss: "Altanta Mountain" },
          { Serverss: "Altanta Peidmont" },
        ],
      },
      {
        Flag: require("../../../../Assets/Images/FlagEmrican.png"),
        Country: "WINDFLIX JP",
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

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
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
