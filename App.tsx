import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <WebView
    style={styles.container}
    source={{ uri: 'https://bibliaudio.com/' }}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    injectedJavaScript="console.error = console.warn = (function() { return function() {}; })()"
  />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});