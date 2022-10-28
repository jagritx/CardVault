import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Card(props) {
  let hiddencard = "••••••••• " + props.data.card.slice(-4);
  const [dataStatus, setData] = useState(0);

  let viewData = () => {
    setData(!dataStatus);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        viewData();
      }}
    >
      <LinearGradient
        useAngle
        angle={45}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.cardwindow}
        colors={["#" + props.data.fav1, "#" + props.data.fav2]}
      >
        <View style={styles.carddetails}>
          <View style={styles.cardcredentials}>
            <Text style={{ ...styles.whitetext, fontWeight: "300" }}>
              {dataStatus == 0 ? hiddencard : props.data.card}
            </Text>
            <Text
              style={{
                ...styles.whitetext,
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              {props.data.type}
            </Text>
          </View>

          <Text
            style={{ ...styles.whitetext, fontWeight: "bold", fontSize: 20 }}
          >
            {props.data.cardname}
          </Text>
          <View style={styles.cardinfo}>
            <View style={styles.amount}>
              <Text style={{ ...styles.whitetext }}>Balance</Text>
              <Text style={{ ...styles.whitetext, fontWeight: "300" }}>
                {props.data.currency + props.data.balance}
              </Text>
            </View>

            <Text
              style={{ ...styles.whitetext, fontWeight: "bold", opacity: 0.8 }}
            >
              {props.data.expiry}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  cardwindow: {
    width: 0.95 * windowWidth,
    height: 0.3 * windowHeight,
    borderRadius: 25,
    marginBottom: 30,
    borderColor: "#FFFFFF",
    borderWidth: 0.2,
  },
  carddetails: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },
  cardinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  whitetext: {
    color: "#FFFFFF",
    fontSize: 30,
  },
});
