import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

export const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Login</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          marginTop: 10,
        }}
      >
        <StyledBtn>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>FaceBook</Text>
        </StyledBtn>
        <StyledBtn>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Instagram</Text>
        </StyledBtn>
      </View>

      <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 30 }}>Or Login with email</Text>

      <View style={{ marginTop: 20, marginBottom: 20, display: 'flex', gap: 15 }}>
        <Input placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />

        <Input
          textContentType="password"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword}
        />
      </View>

      <StyledBtn onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
      </StyledBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
});

const StyledBtn = styled.Pressable`
  background-color: #ec6142;
  padding: 15px;
  border-radius: 14px;
`;

const Input = styled.TextInput`
  height: 50px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;
