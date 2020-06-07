import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

const TaskList = () => {

    const today = moment().locale('pt-br').format('ddd, d [de] MMMM')

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../../assets/imgs/today.jpg')}>
                <View style={styles.titleBar}>
                    <Text>Hoje</Text>
                    <Text>{today}</Text>
                </View>
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
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default TaskList;