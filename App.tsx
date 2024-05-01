import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <WebView
         source={{ uri: 'https://bibliaudio.com/' }}
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
        mixedContentMode="compatibility"
        originWhitelist={['*']} 
        allowFileAccess={true} 
        allowUniversalAccessFromFileURLs={true}
        mediaPlaybackRequiresUserAction={false} 
        // Additional props as needed based on specific requirements
        onError={(error) => console.error('WebView error:', error.nativeEvent)}
        // You can add onLoad, onLoadStart, onLoadEnd handlers for debugging
      />
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
