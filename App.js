import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App() {

  const url = "https://wl42cxhpy5.execute-api.us-east-1.amazonaws.com/courses"

  async function getCourse(tempory) {

    await axios({
      method: "get",
      url: url,
    }).then((item) => {
      tempory.push(item.request._response)
      // console.log(" >>>>>>>>>> Deu certo >>>>>>>>>> ", );

    }).catch((err) => {
      console.log(" >>>>>>>>>> Deu errado >>>>>>>>>> ", err);
    })
    return tempory;
  }

  async function handleGetClick() {
    let tempory = [];
    const response = await getCourse(tempory);
    console.log(" >>>>>>>>>> Deu certo >>>>>>>>>> ", response);
  }

  function handleGetIdClick() {
    console.log("Resgatar GET ID");
  }

  function handlePostClick() {
    console.log("Realizar POST");
  }

  function handlePutClick() {
    console.log("Realizar PUT");
  }

  function handleDeleteClick() {
    console.log("Realizar DELETE");
  }

  return (
    <View style={styles.container}>
      <Text>CRUD AWS</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleGetClick()}>
        <Text style={styles.textButton}>GET ID</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleGetIdClick()}>
        <Text style={styles.textButton}>GET</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handlePostClick()}>
        <Text style={styles.textButton}>POST</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handlePutClick()}>
        <Text style={styles.textButton}>PUT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleDeleteClick()}>
        <Text style={styles.textButton}>DELET</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: "80%",
    height: "5%",
    backgroundColor: "black",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: "center",
  },
  textButton: {
    fontSize: 14,
    color: "white"
  }
});
