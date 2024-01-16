import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../components/WrapperContainer';

const HomeScreen = () => {
  return (
    <WrapperContainer>
      <TouchableOpacity>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
