import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    Width: '100%',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: 'comic-regular',
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
