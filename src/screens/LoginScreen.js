import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const source = require("../../assets/logo.png");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View>
        <Image style={styles.image} source={source} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.loginTitle}>Login in to your account</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <TextInputComponent
            value={email}
            onChangeText={(text) => setEmail(text)}
            icon={
              <MaterialCommunityIcons
                style={styles.icon}
                name="email"
                size={24}
                color="gray"
              />
            }
            textInputCss={styles.textInput(email)}
            textOuterCss={styles.styleTextInput}
            placeholder="Enter your email"
          />

          <TextInputComponent
            value={password}
            onChangeText={(text) => setPassword(text)}
            icon={
              <AntDesign
                style={styles.icon}
                name="lock1"
                size={24}
                color="gray"
              />
            }
            textInputCss={styles.textInput(password)}
            textOuterCss={styles.styleTextInput}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.bottomContainer}>
          <Text>Keep me logged in</Text>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </View>

        <View style={{ marginTop: 60 }}>
          <ButtonComponent
            btnStyle={styles.btnStyle}
            txtStyle={styles.txtStyle}
            title="Login"
          />
        </View>
        <View>
          <ButtonComponent
            onPress={() => navigation.navigate("Register")}
            btnStyle={{ marginTop: 15 }}
            txtStyle={{ textAlign: "center", color: "gray", fontSize: 16 }}
            title="Don't have an account? Sign up"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1, backgroundColor: "white", alignItems: "center" },

  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },

  image: { width: 150, height: 100 },

  icon: { marginLeft: 8 },

  textInput: (value) => {
    const updateValue = value ? 16 : 16;
    return {
      marginVertical: 10,
      width: 300,
      color: "gray",
      fontSize: updateValue,
    };
  },

  styleTextInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
  },

  forgotPassword: { color: "#007FFF", fontWeight: "500" },
  bottomContainer: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnStyle: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  txtStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
