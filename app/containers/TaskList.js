import React from 'react';
import { View, Text, Button } from 'react-native';

import Task from '../components/Task';
import { styles } from '../../styles';

export default class TaskList extends React.Component{

    componentWillMount() {
        // const url = 'https://my-json-server.typicode.com/taraskin89/tasks/tasks';
        // const nUrl = 'https://jsonplaceholder.typicode.com/users';
        //this.props.setTasks();
    }

    render(){
        return(
            <View>
            <Text>Tasks</Text>
                {/* <Button title='Add New Task' onPress={this.props.onClosePanel} style={{ margin: 20}}/>
                <Button title='Close Me' onPress={this.props.onClosePanel} /> */}
                {this.props.tasks.map(t => <Task key={t.id}
                        title = {t.title} 
                        isDone = {t.isDone}       
                />  )}
            </View>
        );
    }
}
