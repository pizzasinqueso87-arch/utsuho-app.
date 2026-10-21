import { StatusBar } from 'expo-status-bar';
import { BackHandler, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import FUMO_HTML from './html';

export default function App() {
  const onMessage = (event) => {
    if (event.nativeEvent.data === 'close') {
      BackHandler.exitApp();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden />
      <WebView
        source={{ html: FUMO_HTML, baseUrl: 'https://localhost' }}
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        onMessage={onMessage}
        style={styles.web}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  web: { flex: 1, backgroundColor: '#ffffff' },
});
