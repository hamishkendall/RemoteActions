import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
    title: string;
    action: () => void;
}>;

const ActionItem = ({title, action}: SectionProps) => {

    const [isLoading, setIsLoading] = useState(false);

    async function RunAction(){
        setIsLoading(true);
        await action();
        setIsLoading(false);
    }

    return (
        <View
          style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                disabled = {isLoading}
                style={styles.touchableOpacity}
                onPress={() => isLoading ? '' : RunAction()}>

                {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} /> : ''}
                {isLoading ? '' : <Text style={styles.touchableOpacityText}>Run</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingRight: 25,
    },
    touchableOpacity: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5
    },
    touchableOpacityDisabled: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5
    },
    touchableOpacityText: {
        flex: 1,
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    activityIndicator: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default ActionItem;