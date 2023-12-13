import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
  Text,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { Keywords } from "../utils/enum";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const source = require("../../assets/logo.png");
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    console.log(JSON.stringify(user));
    axios
      .post("http://192.168.0.29:8000/login", user)
      .then((response) => {
        // console.log(JSON.stringify(response));
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };
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
                color="black"
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
                color="black"
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
            onPress={handleLogin}
            btnStyle={styles.btnStyle}
            txtStyle={styles.txtStyle}
            title="Login"
          />
        </View>
        <View>
          <ButtonComponent
            onPress={() => navigation.navigate("Register")}
            btnStyle={{ marginTop: 15 }}
            txtStyle={{ textAlign: "center", color: "black", fontSize: 16 }}
            title={Keywords.DONT_HAVE_ACCOUNT}
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
      color: "black",
      fontSize: updateValue,
    };
  },

  styleTextInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 5,
    paddingVertical: 5,
    borderRadius: 5,
    borderBottomColor: "#D0D0D0",
    borderBottomWidth: 1,
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
