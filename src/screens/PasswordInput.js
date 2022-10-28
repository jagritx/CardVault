import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function PasswordInput() {
  const [name, onChangeName] = useState("");
  const [site, onChangeSite] = useState("");
  const [user, onChangeUser] = useState("");
  const [pass, onChangePass] = useState("");
  return (
    <ScrollView>
      <Text
        style={{
          color: "white",
          padding: 20,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        Enter Credentials
      </Text>
      <View style={styles.container}>
        <View style={styles.window}>
          <View style={styles.details}>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              placeholder="Account Name"
              placeholderTextColor="#AAAAAA"
              style={{
                ...styles.whitetext,
                fontWeight: "bold",
              }}
            />
            <TextInput
              onChangeText={onChangeSite}
              value={site}
              placeholder='"www.websitename.com"'
              placeholderTextColor="#AAAAAA"
              style={{
                ...styles.whitetext,
                fontWeight: "300",
                opacity: 0.5,
                textDecorationLine: "underline",
              }}
            />
            <View style={styles.field}>
              <Text style={{ ...styles.whitetext, fontWeight: "500" }}>
                {"Username : "}
              </Text>
              <TextInput
                onChangeText={onChangeUser}
                value={user}
                placeholder="___________"
                placeholderTextColor="#AAAAAA"
                style={{ ...styles.whitetext, fontWeight: "300" }}
              />
            </View>
            <View style={styles.field}>
              <Text style={{ ...styles.whitetext, fontWeight: "500" }}>
                {"Password : "}
              </Text>
              <TextInput
                onChangeText={onChangePass}
                value={pass}
                placeholder="___________"
                placeholderTextColor="#AAAAAA"
                style={{ ...styles.whitetext, fontWeight: "300", opacity: 0.8 }}
              />
            </View>
          </View>
        </View>
        <Button
          onPress={() => {
            alert("Successfully saved the details.");
          }}
          title={"Save Account"}
        />
      </View>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  whitetext: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  window: {
    width: 0.95 * windowWidth,
    height: 0.4 * windowHeight,
    borderRadius: 25,
    marginBottom: 30,
    paddingBottom: 20,
    borderColor: "#2D2D2D",
    borderWidth: 0.2,
    backgroundColor: "#222222",
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
