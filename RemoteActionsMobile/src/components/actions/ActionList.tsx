import {StyleSheet,View} from 'react-native';
import ActionItem from './ActionItem';
import ShutdownPC from '../../actions/ShutdownPC';
import GetTestData from '../../actions/GetTestData';

const ActionList = () => {
    return(
        <View style={styles.container}>
            <ActionItem title="Get Test Data" action={GetTestData} />
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