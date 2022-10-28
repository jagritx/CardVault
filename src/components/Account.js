import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Linking } from "react-native";
import React, { useState } from "react";

export default function Account(props) {
  let hiddenpass = "********  ";
  const [passStatus, setPass] = useState(0);

  let viewPass = () => {
    setPass(!passStatus);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        viewPass();
      }}
      style={styles.window}
    >
      <View style={styles.details}>
        <Text style={{ ...styles.whitetext, fontWeight: "bold" }}>
          {"Account : " + props.data.account}
        </Text>

        <Text
          onPress={() => {
            Linking.openURL("https://" + props.data.website);
          }}
          style={{
            ...styles.whitetext,
            fontWeight: "300",
            opacity: 0.5,
            textDecorationLine: "underline",
          }}
        >
          {props.data.website}
        </Text>
        <View style={styles.field}>
          <Text style={{ ...styles.whitetext, fontWeight: "500" }}>
            {"Username : "}
          </Text>
          <Text style={{ ...styles.whitetext, fontWeight: "300" }}>
            {props.data.username}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={{ ...styles.whitetext, fontWeight: "500" }}>
            {"Password : "}
          </Text>
          <Text
            style={{ ...styles.whitetext, fontWeight: "300", opacity: 0.8 }}
          >
            {passStatus == 0 ? hiddenpass : props.data.password}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  whitetext: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  window: {
    width: 0.95 * windowWidth,
    height: 0.2 * windowHeight,
    borderRadius: 25,
    marginBottom: 20,
    borderColor: "#2D2D2D",
    borderWidth: 0.2,
    backgroundColor: "#007aff",
  },
  details: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },
  field: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});
