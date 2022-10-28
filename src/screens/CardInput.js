import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const CardInput = () => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const [name, onChangeName] = useState("New Card");
  const [date, onChangeDate] = useState("");
  const [balance, onChangeBalance] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          padding: 20,
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Enter your New Card Details.
      </Text>
      <View style={styles.cardwindow}>
        <View style={styles.carddetails}>
          <View style={styles.cardcredentials}>
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Card Number"
              placeholderTextColor="#AAAAAA"
              style={{ ...styles.whitetext, fontWeight: "300" }}
            />
            <TextInput
              onChangeText={onChangeText}
              value={text}
              placeholder="Card Authorizer"
              placeholderTextColor="#AAAAAA"
              style={{
                ...styles.whitetext,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: 20,
              }}
            />
          </View>

          <TextInput
            onChangeText={onChangeName}
            value={name}
            placeholderTextColor="#FFFFFF"
            style={{ ...styles.whitetext, fontWeight: "bold", fontSize: 20 }}
          />
          <View style={styles.cardinfo}>
            <View>
              <Text
                style={{
                  ...styles.whitetext,
                  fontWeight: "300",
                }}
              >
                Balance:
              </Text>
              <TextInput
                onChangeText={onChangeBalance}
                value={balance}
                placeholder="0"
                placeholderTextColor="#FFFFFF"
                style={{
                  ...styles.whitetext,
                  fontWeight: "300",
                  opacity: 0.8,
                }}
              />
            </View>
            <TextInput
              onChangeText={onChangeDate}
              value={date}
              placeholder="Expiry"
              placeholderTextColor="#FFFFFF"
              style={{ ...styles.whitetext, fontWeight: "bold", opacity: 0.8 }}
            />
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          alert("Successfully Added Card");
        }}
        title={"Add Card"}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  whitetext: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  cardwindow: {
    width: 0.95 * windowWidth,
    height: 0.3 * windowHeight,
    borderRadius: 25,
    marginBottom: 30,
    borderColor: "#CCCCCC",
    borderWidth: 0.2,
    backgroundColor: "#333333",
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
});

export default CardInput;
