import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Home: undefined;
  Chat: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Stack = createStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/883/883407.png" }} style={styles.logo} />
      <Text style={styles.title}>Welcome to Health AI</Text>
      <Text style={styles.subtitle}>Your trusted AI-powered medical assistant.</Text>

      <View style={styles.promptContainer}>
        <Text style={styles.prompt}> "What are the symptoms of viral fever?"</Text>
        <Text style={styles.prompt}> "Can I take paracetamol for a headache?"</Text>
        <Text style={styles.prompt}> "Is this rash on my neck normal?"</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Chat")}>
        <Text style={styles.buttonText}>Ask Your Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const ChatScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Chat with AI</Text>
    <Text style={styles.subtitle}>Describe your symptoms or ask a health-related question.</Text>
  </View>
);


export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  promptContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  prompt: {
    color: "#1565C0",
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
