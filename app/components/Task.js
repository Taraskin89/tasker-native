import React from 'react';
import { View, Text } from 'react-native';
// import { Checkbox } from 'react-native-material-design';

export default class Task extends React.Component {
    render() {
        return (
            <View>
                {/* <Checkbox label="Complete" value="complete" checked={this.props.isDone} /> */}
                <Text> {this.props.title} </Text>
            </View>
        );
    }
}