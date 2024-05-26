import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CustomStatusBar} from '@components';
import {RegisterScreens} from '@screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppProvider} from './src/provider/AppProvider';
import {colors} from './src/theme/colors';

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
            <RegisterScreens />
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
