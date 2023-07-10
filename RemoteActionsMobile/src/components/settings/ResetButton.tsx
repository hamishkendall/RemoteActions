import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
    resetFunction: () => void;
}>;

const ResetButton = ({resetFunction}: SectionProps) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={resetFunction}>
                <Text style={styles.touchableOpacityText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    touchableOpacity: {
        flex: 1,
        height: 50,
        backgroundColor: 'rgba(255,90,90,0.5)',
        borderRadius: 5,
        margin: 5,
    },
    touchableOpacityText: {
        flex: 1,
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default ResetButton;