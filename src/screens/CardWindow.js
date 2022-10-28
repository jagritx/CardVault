import { Text, StyleSheet, View, ScrollView } from "react-native";
import React, { Component } from "react";
import Card from "../components/Card";
export default function CardWindow() {
  //API Response
  const data = [
    {
      card: "6450 8813 9201 4231",
      type: "VISA",
      cardname: "Jagrit's ICICI",
      balance: 90000,
      currency: "₹",
      expiry: "07/25",
      fav1: "007AFF",
      fav2: "55DFFF",
    },
    {
      card: "64534231321",
      type: "Starbucks",
      cardname: "Morning Coffee",
      balance: 400,
      currency: "$",
      expiry: "Permanent",
      fav1: "FF4D5F",
      fav2: "FF015F",
    },
    {
      card: "645019291",
      type: "Amazon Gift Card",
      cardname: "Unused",
      balance: 5000,
      currency: "₹",
      expiry: "12/30",
      fav1: "0FAF00",
      fav2: "00BF07",
    },
    {
      card: "6450 8813 9201 4231",
      type: "VISA",
      cardname: "Family Funds",
      balance: 90000,
      currency: "$",
      expiry: "01/21",
      fav1: "F2A3FF",
      fav2: "D3D1FF",
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
        Saved Cards
      </Text>
      <View style={styles.container}>
        <ScrollView>
          {data.map((info, id) => {
            return <Card data={info} key={id} />;
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
