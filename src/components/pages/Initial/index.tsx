// 初期画面時にこの画面が遷移される
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Initial() {
  return (
    <View style={styles.container}>
      <Text>Initial</Text>
    </View>
  );
}
