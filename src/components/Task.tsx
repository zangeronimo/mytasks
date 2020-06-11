import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome as Icon } from 'expo-vector-icons';

interface TaskProps {
    desc: String;
    estimateAt: Date;
    doneAt?: Date;
}

const Task: React.FC<TaskProps> = props => {

    const getCheckView = (doneAt?: Date) => {
        if (doneAt != undefined) {
            return (
                <View style={styles.done}>
                    <Icon name="check" size={20} color='#fff'></Icon>
                </View>
            )
        }
        return (
            <View style={styles.pending}></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.desc}</Text>
                <Text>{props.estimateAt + ""}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: "#4D7031",
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Task;