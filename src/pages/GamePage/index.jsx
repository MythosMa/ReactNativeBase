import {StyleSheet, SafeAreaView, Text} from 'react-native';
import WebView from 'react-native-webview';

const GamePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'http://game.wzzd.dev.lscsgogo.com/?user=385&dddd=1111'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default GamePage;
