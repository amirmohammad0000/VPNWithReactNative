//////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { styles } from "./Css/CssFavourites";
import { NativeBaseProvider, Box, FlatList, Text } from "native-base";
import ServerFavourites from "./Components/ServerFavourites";
//////////////////////////////////////////////////////////////////////// End Section Import

//////////////////////////////////////////////////////////////////////// Start Section Class
export default class Favourites extends React.Component {
  state = {
    data: [{ Server: "Dollas" }],
  };

  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {this.state.data.length === 0 ? (
            <Text style={styles.text_no_favourites}>No Favourites</Text>
          ) : (
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ServerFavourites Server={item.Server} />
              )}
            />
          )}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
}
//////////////////////////////////////////////////////////////////////// End Section Class
