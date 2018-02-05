import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {View, Text, Button, Alert} from 'react-native';
import TaskList from './TaskList';
import SideBar from '../components/SideBar';
import { Drawer } from 'native-base';

import * as tasksActions from '../actions/taskActions';

import {styles } from '../../styles';

class IndexContainer extends React.Component{
    constructor(props){
        super(props);
    }

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    onAddNewTask(){

    }

    componentWillMount() {
        const { setTasks } = this.props.tasksActions;
        setTasks();
    }

    render(){
        const {setTasks} = this.props.tasksActions;
        const { tasks, failed, fetching} = this.props;

        return(
            // <Drawer style={{backgroundColor: 'red', opacity: 0.3}}
            //     ref={(ref) => { this.drawer = ref; }}
            //     content={<SideBar />}
            //     onClose={() => this.closeDrawer()} >  </Drawer>

                <View ref={(ref) => this._main = ref} style={styles.container}>
                <View style={styles.header}>
                    <Button title='=' onPress={this.openDrawer} />
                    <Text >Wellcome to Task Manager</Text>
                </View>
                    
                    <TaskList setTasks={setTasks}
                        tasks={tasks.taskArr} onfetching={tasks.fetching} onfailed={tasks.failed}/>
                    <Button title='Add new Task' onPress={this.onAddNewTask.bind(this)} />
                    {/* <Button title='Side' onPress={this.openDrawer} /> */}
                </View>
          
           
        );
    }
}

const mapStateToProps = state =>{
    return{
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        tasksActions: bindActionCreators(tasksActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);




