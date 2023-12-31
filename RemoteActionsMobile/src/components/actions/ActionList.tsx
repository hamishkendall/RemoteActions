import {StyleSheet,View} from 'react-native';
import ActionItem from './ActionItem';
import GetTestConnection from '../../actions/GetTestConnection';
import {PostTest, ShutdownPC, RestartPC} from '../../actions/PostActions';


const ActionList = () => {
    return(
        <View style={styles.container}>
            <ActionItem title="Test Connection" action={GetTestConnection} />
            <ActionItem title="Test Post" action={PostTest} />
            <ActionItem title="Shutdown PC" action={ShutdownPC} />
            <ActionItem title="Restart PC" action={RestartPC} />
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