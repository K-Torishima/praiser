import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as UiContext from './contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  const [applicationState, setApplicationState] = React.useState(
    UiContext.createApplicationInitalState(),
  );
  return (
    <UiContext.Context.Provider value={{applicationState, setApplicationState}}>
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    </UiContext.Context.Provider>
  );
}
