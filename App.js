/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  onLayout = e => {
    const {
      nativeEvent: {
        layout: {height},
      },
    } = e;
    this.height = height;
    this.forceUpdate();
  };

  render() {
    const {height: heightOfDeviceScreen} = Dimensions.get('window');

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentContainerStyle={{
              minHeight: this.height || heightOfDeviceScreen,
            }}
            onLayout={this.onLayout}>
            <View style={styles.container}>
              <Text>Home screen</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
