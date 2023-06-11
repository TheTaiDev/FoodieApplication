import { Text, View, TextInput } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/Ionicons";

export class Header extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 50,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            width: 224,
            height: 88,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700",
              lineHeight: 45,
              color: "#000000",
            }}
          >
            Find Your Favourite Food
          </Text>
        </View>
        <View
          style={{
            marginTop: 30,

            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 330,
              height: 54,
              backgroundColor: "#EDEDED",
              borderRadius: 20,
              // justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",

              gap: 20,
            }}
          >
            <Icon
              style={{
                paddingLeft: 20,
              }}
              name="search"
              size={24}
              color={"#646464"}
            />
            <TextInput
              placeholder="Search for Food"
              style={{
                height: 54,
                fontSize: 14,
                fontWeight: "600",
                lineHeight: 24,
              }}
            />
          </View>
          <View
            style={{
              paddingLeft: 5,
            }}
          >
            <Icon1 name="notifications-circle" size={40} color={"#EC2578"} />
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
