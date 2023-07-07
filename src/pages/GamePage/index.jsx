import {StyleSheet, SafeAreaView, Text} from 'react-native';

const GamePage = () => {
  return (
    <SafeAreaView className={styles['styles']}>
      <Text>game page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GamePage;
