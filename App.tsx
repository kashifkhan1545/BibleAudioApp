import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet, View, Text } from 'react-native'; // Import Text for error message
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Enclose WebView within a View */}
      <WebView
        source={{ uri: 'https://bibliaudio.com/' }}
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
        mixedContentMode="compatibility"
        originWhitelist={['*']} 
        allowFileAccess={true} 
        allowUniversalAccessFromFileURLs={true}
        mediaPlaybackRequiresUserAction={false}
        injectedJavaScript={`document.querySelector('.audio-player').style.position = 'fixed'; document.querySelector('.audio-player').style.bottom = '0';`}
        allowsInlineMediaPlayback={true} 
        onError={(error) => console.error('WebView error:', error.nativeEvent)}
        // You can add onLoad, onLoadStart, onLoadEnd handlers for debugging
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
