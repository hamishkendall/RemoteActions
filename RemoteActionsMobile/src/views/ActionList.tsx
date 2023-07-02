import React from 'react';
import {StyleSheet,View} from 'react-native';
import ActionSection from '../components/ActionSection';
import ShutdownPC from '../actions/ShutdownPC';

const ActionList = () => {

    return(
        <View style={styles.container}>
            <ActionSection title="Shutdown PC" action={ShutdownPC} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10
    }
});

export default ActionList;