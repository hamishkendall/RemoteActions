import {Alert} from 'react-native';
import ActionType from "./ActionType";

const ActionPostRequest = async (actionTitle: string, action: ActionType) => {
    
    const timeoutDuration = 3000;
    const timeoutPromise = new Promise<Response>((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request times out'));
        }, timeoutDuration);
    });

    try {
        const response = await Promise.race([
            fetch('http://192.168.1.222:8082/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    AuthToken: 'TEMPTOKEN',
                    Action: action,
                }),
            }),
            timeoutPromise,
        ]);
        
        Alert.alert('Action Result: '+response.status, actionTitle + ' completed!');
    } catch (error) {
        Alert.alert('Action Result Failed', actionTitle + ' Failed! \n' + error)
    }
}

export default ActionPostRequest;