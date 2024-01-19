import React from 'react';
import Flag from 'react-native-round-flags';
import styled from 'styled-components/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

export const HomeScreen = ({ navigation }) => {
  const travelsMock = [
    { country: 'Syria', flag: 'SY' },
    { country: 'Lebanon', flag: 'LB' },
    { country: 'Armenia', flag: 'AM' },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <Fontisto name="world-o" size={24} color="orange" />
        <Title>Hello Puzant</Title>
      </View>
      <Text>What's your next adventure</Text>

      <View style={styles.subContainer}>
        <Title>Your Travels</Title>
        <Pressable onPress={() => navigation.navigate('NewTravel')}>
          <Ionicons name="add-circle-outline" size={24} color="orange" />
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        {travelsMock.map((_) => (
          <View style={{ alignItems: 'center', gap: 5 }}>
            <Flag code={_.flag} />
            <Text>{_.country}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});

const Title = styled.Text`
  font-size: 20px;
`;
