import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkUser = (user, pass) => {
    if ((user == "sanjay") && (pass == "123")) {
        console.log("Student");
        // router.push("./users/StudentApp");
    } else if ((user == "mohan") && (pass == "123")) {
        console.log("Crew");
        router.push("./crew/CrewApp");
    } else if (user == "reka" && pass == "123") {
        console.log("Hosteller");
        // router.push("./hosteller/HostellerTicket");
    } else {
        console.log("UnAuthorized User");
        setUsername("");
        setPassword("");
    }
  }

  const handleLogin = async () => {
    checkUser(username, password);
    axios.post('http://192.168.29.205:3001/login', {
      username: username,
      password: password
    })
  .then(response => {
    console.log('Response from server:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Where Is My Bus</Text>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Login;
