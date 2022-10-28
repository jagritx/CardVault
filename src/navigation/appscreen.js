import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainScreen from "./mainscreen";
import LockScreen from "./LockScreen";

export default function home() {
  //JWT Authentication API Response
  let password = "4570";
  const [logged, loggedStatus] = useState(0);
  return (
    <>
      {logged == 0 ? (
        <LockScreen password={password} login={loggedStatus} />
      ) : (
        <MainScreen />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
