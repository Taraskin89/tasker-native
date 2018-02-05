import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export default class Spiner extends React.Component{
    render(){
        return(
            <View style={activityIndicatorContainer}>
                <ActivityIndicator
                    animating={true}
                    style={[{ height: 80 }]}
                    size="small"
                />
            </View>
        );
    }
}

var activityIndicatorContainer = StyleSheet.create({
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
});