import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, Switch } from 'react-native';

import { Test } from './components';

export default function App() {
  const [value, setValue] = React.useState('')
  const [isEnabled, setIsEnabled] = React.useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/200'}} style={{width: 200, height: 200, borderRadius: 14}} />

      <Test />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <TextInput
        style={styles.input}
        placeholder='type something'
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>Welcome to Travel Book</Text>
      <View style={{display: 'flex', gap: 12}}>
       <Text style={{color: '#500F1C'}}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>

        <Text style={{color: '#303374'}}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </View>

      

      <Button style={{marginTop: 10}} title="Click" color="midnightblue" onPress={() => alert('test')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEEED',
    padding: 35,
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  }
});
