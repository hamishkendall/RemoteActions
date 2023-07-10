import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import LoginInput from '../components/settings/LoginInput';
import ResetButton from '../components/settings/ResetButton';
import * as Keychain from 'react-native-keychain';


const SettingsView = () => {
    
    const [serverIp, setServerIp] = useState('192.168.1.222:8082');
    const [token, setToken] = useState('TEMPTOKEN');
    
    async function GetCredentials(){
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                setServerIp(credentials.username);
                setToken(credentials.password);
                console.log('Credentials loaded');
            } else {
                console.log('No credentials stored');
                SetCredentials();
            }
        } catch (error) {
            console.log("Keychain couldn't be accessed!", error);
        }
    }

    useEffect(()=>{
        GetCredentials();
        console.log('Got creds from effect');
    }, []);

    useEffect(()=>{
        SetCredentials();
        console.log('Set creds from effect');
    }, [serverIp, token]);

    async function SetCredentials(){
        await Keychain.setGenericPassword(serverIp, token);
    }

    function ResetSettings(){
        setServerIp('192.168.1.222:8082');
        setToken('TEMPTOKEN');
    }

    return (
        <View style={styles.container}>

            <LoginInput title='IP' defaultText={serverIp} updateText={setServerIp} />
            <LoginInput title='Token' defaultText={token} updateText={setToken} />

            <ResetButton resetFunction={ResetSettings} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0b45'
    }
});

export default SettingsView;