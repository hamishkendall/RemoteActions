import {Alert} from 'react-native';

const GetTestConnection = async () => {
    
    const timeoutDuration = 3000;
    const timeoutPromise = new Promise<Response>((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request times out'));
        }, timeoutDuration);
    });

    try {
        const response = await Promise.race([
            fetch('http://192.168.1.222:8082/action',),
            timeoutPromise,
        ]);
        
        Alert.alert('Connection Result: '+response.status, 'Connection Success!');

    } catch (error) {
        Alert.alert('Action Failed', ''+error);
    }
}

export default GetTestConnection;