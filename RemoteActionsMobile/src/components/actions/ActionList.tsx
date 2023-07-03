import {StyleSheet,View} from 'react-native';
import ActionItem from './ActionItem';
import ShutdownPC from '../../actions/ShutdownPC';

const ActionList = () => {
    return(
        <View style={styles.container}>
            <ActionItem title="Shutdown PC" action={ShutdownPC} />
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