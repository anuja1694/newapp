// CustomModal.tsx
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

type ButtonConfig = {
  title: string;
  onPress: () => void;
};

type CustomModalProps = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButton?: ButtonConfig;
  cancelButton?: ButtonConfig;
  message: string;

};


export default function Modalitem(props: CustomModalProps) {
  const { visible, message, confirmButton, cancelButton } = props;
      
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={cancelButton?.onPress} 
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonContainer}>
            {cancelButton && (
              <Button title={cancelButton.title} onPress={cancelButton.onPress} />
            )}
            {confirmButton && (
              <Button title={confirmButton.title} onPress={confirmButton.onPress} />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

