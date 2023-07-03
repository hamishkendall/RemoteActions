import React, {useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import ActionView from './src/views/ActionView';
import SettingsView from './src/views/SettingsView';
import NavBar from './src/components/nav/NavBar';


const App = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const mainContent = GetMainContent();

  function GetMainContent(){
    if(viewIndex === 1){
      return <SettingsView />;
    }

    return <ActionView />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remote Actions</Text>
      {mainContent}      
      <NavBar viewActions={() => setViewIndex(0)} viewSettings={() => setViewIndex(1)} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b45'
  },
  title: {
    fontSize: 35,
    fontWeight: '800',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 15
  }
});

export default App;