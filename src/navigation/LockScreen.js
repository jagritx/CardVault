import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function LockScreen(props) {
  const [pass, passEnter] = useState("");
  const [passStatus, passStatusChange] = useState(
    "Store your Cards and Passwords in One Place"
  );
  return (
    <SafeAreaView style={{ backgroundColor: "#000000", height: "100%" }}>
      <Text
        style={{
          color: "white",
          paddingTop: 70,
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
          height: 160,
        }}
      >
        {pass === "" ? passStatus : ""}
      </Text>
      <View style={styles.container}>
        <Text
          style={{
            color: "white",
            paddingBottom: 30,
            fontSize: 35,
            fontWeight: "500",
            textAlign: "center",
            height: 70,
          }}
        >
          {pass.length >= 1 ? "•".repeat(pass.length) : ""}
        </Text>

        <View style={styles.numcontainer}>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "1");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "2");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "3");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numcontainer}>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "4");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "5");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "6");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              6
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numcontainer}>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "7");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "8");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "9");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "light", opacity: 0.8 }}
            >
              9
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numcontainer}>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass.substring(0, pass.length - 1));
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "bold", opacity: 0.8 }}
            >
              <Ionicons name="backspace-outline" size="30" color={"white"} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              passEnter(pass + "0");
            }}
            style={styles.passCircle}
          >
            <Text
              style={{ ...styles.whitetext, fontWeight: "bold", opacity: 0.8 }}
            >
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (pass === props.password) {
                props.login(1);
              } else {
                passEnter("");
                passStatusChange("Wrong Passcode");
              }
            }}
            style={{ ...styles.passCircle, backgroundColor: "#007aff" }}
          >
            <Text style={{ ...styles.whitetext, fontWeight: "bold" }}>
              <Ionicons
                name="arrow-forward-outline"
                size="30"
                color={"white"}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          paddingTop: 30,
          fontSize: 20,
          fontWeight: "300",
          textAlign: "center",
        }}
      >
        Made by Jagrit Kamra
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  whitetext: {
    color: "#FFFFFF",
    fontSize: 30,
  },

  container: {
    alignItems: "center",
    paddingTop: 40,
  },
  numcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passCircle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 50,
    height: 90,
    width: 90,
    margin: 10,
  },
});
