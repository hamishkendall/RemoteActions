import {StyleSheet,View} from 'react-native';
import ActionItem from './ActionItem';
import ShutdownPC from '../../actions/ShutdownPC';
import GetTestConnection from '../../actions/GetTestConnection';
import PostTest from '../../actions/PostTest';
import TeapotPost from '../../actions/TepotPost';

const ActionList = () => {
    return(
        <View style={styles.container}>
            <ActionItem title="Test Connection" action={GetTestConnection} />
            <ActionItem title="Test Post" action={PostTest} />
            <ActionItem title="Shutdown PC" action={ShutdownPC} />
            <ActionItem title="Teapot Response" action={TeapotPost} />
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