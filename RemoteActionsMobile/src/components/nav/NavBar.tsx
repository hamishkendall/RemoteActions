import type {PropsWithChildren} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type SectionProps = PropsWithChildren<{
    viewActions: (params: any) => void;
    viewSettings: (params: any) => void;
  }>;

const NavBar = ({viewActions, viewSettings}: SectionProps) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.navButton} onPress={viewActions}>
                <Text style={styles.navButtonText}>Actions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navButton} onPress={viewSettings}>
                <Text style={styles.navButtonText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50
    },
    navButton: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderColor: '#FFFFFF',
        borderWidth: 1
    },
    navButtonText: {
        flex: 1,
        fontSize: 23,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default NavBar;