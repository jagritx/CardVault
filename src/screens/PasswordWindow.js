import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Account from "../components/Account";

export default function PasswordWindow() {
  //API Response
  const data = [
    {
      account: "Facebook",
      website: "www.facebook.com",
      username: "zedddx",
      password: "swiftisbetter",
    },
    {
      account: "Amazon",
      website: "www.amazon.in",
      username: "herolal@gmail.com",
      password: "swiftisbetter",
    },
    {
      account: "Instagram",
      username: "zedddxlol",
      website: "www.instagram.com",
      password: "swiftisbetter",
    },
    {
      account: "Manga",
      website: "www.google.com",
      username: "DesiNaruto",
      password: "swiftisbetter",
    },
    {
      account: "Government of India",
      website: "thejk.herokuapp.com",
      username: "Owaisi",
      password: "swiftisbetter",
    },
    {
      account: "Angellist",
      website: "www.angel.co",
      username: "jkjkjk",
      password: "swiftisbetter",
    },
    {
      account: "All",
      website: "literallyeachone",
      username: "arewrong",
      password: "passwords",
    },
  ];
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
        Your Passwords
      </Text>
      <Text
        style={{
          color: "white",
          padding: 20,
          fontSize: 20,
          fontWeight: "300",
        }}
      >
        Tap Card to Unhide
      </Text>
      <View style={styles.container}>
        <ScrollView>
          {data.map((info, id) => {
            return <Account data={info} key={id} />;
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
