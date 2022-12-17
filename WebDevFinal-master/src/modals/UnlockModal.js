import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-paper";

function UnlockModal(props) {
  function handleYes() {
    props.unlockExercise();
    props.close();
  }
  return (
    <TouchableWithoutFeedback onPress={props.close}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={{ color: "white" }} variant={"labelLarge"}>
            Are you sure you want to unlock {props.exercise.name}
          </Text>
          <Text style={{ color: "white" }} variant={"labelLarge"}>
            for {props.exercise.points}{" "}
            <FontAwesome5 name="star" size={20} color="yellow" />?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable style={styles.openModalButton} onPress={handleYes}>
              <Text style={{ color: "white" }} variant={"labelLarge"}>
                Yes
              </Text>
            </Pressable>
            <Pressable style={styles.openModalButton} onPress={props.close}>
              <Text style={{ color: "white" }} variant={"labelLarge"}>
                No
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  openModalButton: {
    backgroundColor: "crimson",
    borderRadius: 20,
    padding: 10,
    width: "35%",
    marginRight: 20,
    alignItems: "center",
    //marginTop: 100,
  },

  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2,
    //borderColor: "blue",
  },
  modalBox: {
    backgroundColor: "grey",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 0.25,
    borderRadius: 20,
  },
});

export default UnlockModal;
