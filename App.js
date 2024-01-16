import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textScale} from './src/styles/responsiveSize';
import fontFamily from './src/styles/fontFamily';
import colors from './src/styles/colors';
import WrapperContainer from './src/components/WrapperContainer';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigations/Routes';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage
        position={'bottom'}
        titleStyle={{
          fontFamily: fontFamily.medium,
          fontSize: textScale(15),
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
      />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
