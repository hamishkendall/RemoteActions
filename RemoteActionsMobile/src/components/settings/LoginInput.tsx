import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';


type SectionProps = PropsWithChildren<{
    title: string;
    defaultText: string;
    updateText: Function;
}>;

const LoginInput = ({title, defaultText, updateText}: SectionProps) =>{


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <TextInput style={styles.inputText} defaultValue={defaultText} onEndEditing={(event) => updateText(event.nativeEvent.text)} />
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
    titleText: {
        flex: 1,
        fontSize: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingRight: 25,
    },
    inputText: {
        flex: 4,
        backgroundColor: 'rgba(255,255,255,0.2)',
        fontSize: 23,
        textAlign: 'center'
    }
});

export default LoginInput;