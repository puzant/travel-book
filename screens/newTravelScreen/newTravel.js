import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const AddNewTravelScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Add New Travel</Title>

      <View style={{ gap: 15, marginTop: 10 }}>
        <Input placeholder="Country" />
        <Input placeholder="City" />
        <Input placeholder="Date" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});

const Title = styled.Text`
  font-size: 20px;
`;

const Input = styled.TextInput`
  height: 50px;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;
