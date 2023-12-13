import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const TextInputComponent = ({
  value,
  onChangeText,
  icon,
  textInputCss,
  textOuterCss,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={textOuterCss}>
      {icon}
      <TextInput
        placeholderTextColor="black"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={textInputCss}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({});
