import {Alert} from 'react-native';
import ActionType from "./ActionType";

const ActionPostRequest = async (actionTitle: string, action: ActionType) => {
    
    try {
        const response = await fetch('http://192.168.1.222:8082/action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                AuthToken: 'TEMPTOKEN',
                Action: action,
            }),
        });
        Alert.alert('Action Result: '+response.status, actionTitle + ' completed!');

    } catch (error) {
        Alert.alert('Action Result Failed', actionTitle + ' Failed!' + error)
    }
}

export default ActionPostRequest;