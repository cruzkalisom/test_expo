import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview'

const MyApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source= {{ uri: '192.168.1.8:50553' }}
        style={styles.webview}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  }
})

export default MyApp

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
