import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const ButtonComponent = ({ btnStyle, txtStyle, title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
