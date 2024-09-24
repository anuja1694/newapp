import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

type CardProps = {
  text1: string;
  text2: string;
  text3: string;
  text1Size?: number;
  text2Size?: number;
  text3Size?: number;
};


export default function Card(props: CardProps) {
  const { text1 = '', text2 = '', text3 = '', text1Size = 16 , text2Size = 16, text3Size = 16} = props;

  return (
    <View style={styles.card}>
       <Text style={[styles.text, { fontSize: text1Size }]}>{text1}</Text>
      <Text style={[styles.text, { fontSize: text2Size }]}>{text2}</Text>
      <Text style={[styles.text, { fontSize: text3Size }]}>{text3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 12,
    backgroundColor: '#02bfe7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
    marginRight: 10,
  },
  text: {
    marginBottom: 8,
  },
});
