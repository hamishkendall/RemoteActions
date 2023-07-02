import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import ActionList from './src/views/ActionList';


const App = () => {
  return (
    <ScrollView
      style={styles.scrollView}>
      
      <ActionList />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0b0b45'
  }
});

export default App;