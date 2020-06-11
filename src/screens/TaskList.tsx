import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import * as Font from 'expo-font';

import Task from '../components/Task';

import commonStyles from '../commonStyles'

class TaskList extends React.Component {
    state = {
        fontsLoaded: false,
    };

    today = moment().locale('pt-br').format('ddd, DD [de] MMMM');

    async _loadFontsAsync() {
        await Font.loadAsync({
            // Load a font `Lato` from a static resource
            'Lato': require('../../assets/fonts/Lato.ttf')
        });
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {

        if (!this.state.fontsLoaded) {
            return null;
        }
        return (
            <View style={styles.container} >
                <ImageBackground style={styles.background} source={require('../../assets/imgs/today.jpg')}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{this.today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc="Ler Livro" estimateAt={new Date()} doneAt={undefined} />
                </View>
            </View>
        )
    }
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
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    }
});

export default TaskList;