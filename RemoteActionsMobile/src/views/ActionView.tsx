import {StyleSheet,ScrollView} from 'react-native';
import ActionList from '../components/actions/ActionList';

const ActionView = () => {
    return (
      <ScrollView style={styles.scrollView}>
        <ActionList />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#0b0b45'
    }
});

export default ActionView;