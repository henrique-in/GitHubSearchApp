import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomStatusBar} from '@components';
import {Routes} from '@routes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {colors} from '@theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import {AppProvider} from './src/provider/AppProvider';

const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <CustomStatusBar
            backgroundColor={colors.primary}
            barStyle="light-content"
          />
          <View style={styles.container}>
            <Routes />
            <Toast />
          </View>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
