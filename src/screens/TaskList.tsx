import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TaskList = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../assets/imgs/today.jpg')}>

            </ImageBackground>
            <View style={styles.taskList}>
                <Text>TaskList</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    }
});

export default TaskList;