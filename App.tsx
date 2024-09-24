/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './src/component/Button/Button';
import Card from './src/component/Card/Card';
import Modalitem from './src/component/Modal/Modalitem';

 
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleDefaultButtonPress = () => {
    Alert.alert('Default Button Pressed');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    console.log('Confirmed');
    setModalVisible(false);
  };

  const handleCancel = () => {
    console.log('Cancelled');
    setModalVisible(false);
  };

  return ( 
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          padding: 10,
          borderColor: 'lightgrey',
          borderWidth: 1,
          margin: 10,
        }}>
        <Button label="default button"         onPress={handleDefaultButtonPress}
        />
        <Button label="rounded button" backgroundColor="#02bfe7" borderColor='#02bfe7' 
        // raised= {true}
        onPress={handleDefaultButtonPress}
        />

      </View>
      <View style={styles.cardRow}>
      <Card
        text1="First Card"
        text2="Larger Text"
        text3="Medium Text"
        text1Size={10}
        text2Size={15}
        text3Size={12}
      />
      <Card
        text1="First Card"
        text2="Larger Text"
        text3="Medium Text"
        text1Size={10}
        text2Size={15}
        text3Size={12}
      />
      <Card
        text1="First Card"
        text2="Larger Text"
        text3="Medium Text"
        text1Size={10}
        text2Size={15}
        text3Size={12}
      />
      </View>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.modalText}>Show Modal</Text>

        </TouchableOpacity>
      <Modalitem
          visible={modalVisible}
          message="Are you sure you want to proceed?"
          confirmButton={{ title: 'Confirm', onPress: handleConfirm }}
          cancelButton={{ title: 'Cancel', onPress: handleCancel }}
        />

        {/* <Modalitem
          visible={modalVisible}
          message="Action completed successfully."
          confirmButton={{ title: 'Okay', onPress: handleConfirm }}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  modalText: {
    fontSize: 18,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default App;
