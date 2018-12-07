/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PushNotification from "react-native-push-notification";

const notificationData = {
  title:
    "Annegret Kramp-Karrenbauer: Merkel's choice elected ruling party leader",
  bigText:
    "The CDU general secretary narrowly beat Friedrich Merz, a millionaire lawyer, in a run-off vote in Hamburg. Ms Kramp-Karrenbauer, or AKK as she is also known, received 517 of 999 votes. Ms Merkel, who plans to serve out her term as chancellor until 2021, gave an emotional farewell speech on Friday at the special party conference.",
  message:
    "Germany's ruling Christian Democrat Union has chosen Annegret Kramp-Karrenbauer as its new party leader, ending Angela Merkel's 18-year reign."
};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
          title={"Send Notification"}
          onPress={() =>
            PushNotification.localNotificationSchedule({
              title: notificationData.title,
              bigText: notificationData.bigText,
              message: notificationData.message,
              vibrate: true,
              vibration: 3000,
              date: new Date(Date.now()) // in 60 secs
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
