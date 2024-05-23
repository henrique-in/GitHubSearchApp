import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {LogoComponent} from './src/brand/LogoComponent';
import CustomStatusBar from './src/components/CustomStatusBar/CustomStatusBar';
import {Responsive} from './src/services';
import {colors} from './src/theme/colors';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <CustomStatusBar
          backgroundColor={colors.primary}
          barStyle="light-content"
        />
        <View style={styles.container}>
          <LogoComponent percentWidth={Responsive.widthScale(0.5)} />
          <Text style={{color: 'black'}}>Hello World</Text>
        </View>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
