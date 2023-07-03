import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
    title: string;
    action: () => void;
}>;

const ActionItem = ({title, action}: SectionProps) => {

    return (
        <View
          style={styles.container}>
    
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity 
                style={styles.touchableOpacity}
                onPress={action}>

                <Text style={styles.touchableOpacityText}>Run</Text>
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
        paddingRight: 25,
    },
    touchableOpacity: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 5
    },
    touchableOpacityText: {
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

export default ActionItem;