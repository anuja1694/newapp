import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
    label?: string;
    labelColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    onPress: () => void;
    // rounded?: boolean;
    // raised?: boolean;
};

export default function Button(props: ButtonProps) {
    const { label = '', labelColor = 'black', backgroundColor = '', borderColor = '', onPress } = props;

    return (
        <View>
            <Pressable
                style={[
                    styles.button,
                    backgroundColor
                        ? { backgroundColor }
                        : { backgroundColor: 'white' },
                    borderColor ? { borderColor } : { borderColor: 'black' },
                    // props.rounded ? styles.rounded : '',
                    // props.raised ? styles.shadow : '',
                    // props.customStyle ? { ...props.customStyle } : ''
                ]}
                onPress={onPress}
            >
                <View style={styles.buttonContainer}>
                    <Text style={[styles.buttonText, { color: labelColor }]}>{label}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
    rounded: {
        borderRadius: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    buttonText: {
        fontSize: 18,
        textTransform: 'capitalize',
        fontWeight: '500',
    },
  
});
